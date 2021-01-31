const state = {
  isLoading: true,
  authKey: 'ixnUhAjshBraAbVO9T5UgYl8f9Zmzaa6PcaAf14dQbA',
  images: []
};

const getters = {
  isLoading: (state) => state.isLoading,
  allImages: (state) => state.images
};

const actions = {
  toggleLoading({ commit }) {
    commit('toggleLoading');
  },
  async getImages({ commit }, url) {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Client-ID ${state.authKey}`
      }
    });
    console.log(response);

    if (response.ok) {
      const data = await response.json();

      commit('setImages', data);
    }
  }
};

const mutations = {
  toggleLoading: (state) => {
    state.isLoading = !state.isLoading;
  },
  setImages: (state, data) => {
    if (data.results) {
      state.images = data.results;
    } else {
      state.images = data;
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
