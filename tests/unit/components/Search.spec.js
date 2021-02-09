import { shallowMount } from '@vue/test-utils';
import App from '@/components/Search.vue';

let wrapper = null;

beforeEach(() => {
  wrapper = shallowMount(App);
});

afterEach(() => {
  wrapper.destroy();
});

describe('App.vue', () => {
  test('renders props.msg when passed', () => {
    const error = wrapper.find('[data-test="error-container"]').text();
    console.log(error);

    expect(error).toBeDefined(false);
  });
});
