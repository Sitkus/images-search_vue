import { createStore } from 'vuex';
import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';
import { Search, Images } from '@/components/';
import { ErrorMessage } from '@/components/common';

let wrapper = null;
let actions = null;
let getters = null;
let store = null;

beforeEach(() => {
  actions = {
    showError: jest.fn(),
    removeError: jest.fn()
  };

  getters = {
    errorMessage: () => ''
  };

  store = createStore({
    modules: {
      error: {
        namespaced: true,
        actions,
        getters
      }
    }
  });

  wrapper = shallowMount(App, {
    global: {
      plugins: [store]
    }
  });
});

afterEach(() => {
  wrapper.unmount();
});

describe('App.vue && ErrorMessage.vue', () => {
  test('components Search and Images are rendered, while ErrorMessage is not', () => {
    const searchComponent = wrapper.findComponent(Search);
    const imagesComponent = wrapper.findComponent(Images);
    const errorMessageComponent = wrapper.findComponent(ErrorMessage);

    expect(searchComponent.exists()).toBe(true);
    expect(imagesComponent.exists()).toBe(true);
    expect(errorMessageComponent.exists()).toBe(false);
  });

  test('ErrorMessage component is rendered if it has any text inside', () => {
    getters = { errorMessage: () => 'Error' };

    store = createStore({
      modules: {
        error: {
          namespaced: true,
          getters
        }
      }
    });

    wrapper = shallowMount(ErrorMessage, {
      global: {
        plugins: [store]
      }
    });

    const errorMessageComponent = wrapper.findComponent(ErrorMessage);
    const errorMessageParagraph = wrapper.find('.error').text();

    expect(errorMessageComponent.exists()).toBe(true);
    expect(errorMessageParagraph).toBe('Error');
  });
});
