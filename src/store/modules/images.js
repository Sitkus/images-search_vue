const state = {
  authKey: 'ixnUhAjshBraAbVO9T5UgYl8f9Zmzaa6PcaAf14dQbA',
  images: []
};

const getters = {
  allImages: (state) => state.images
};

const actions = {
  async getImages({ commit }, url) {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Client-ID ${state.authKey}`
      }
    });
    const data = await response.json();

    commit('setImages', data);
    // commit('setImages', data);
  }
  // getImages({ commit }, url) {
  //   fetch(url, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       authorization: `Client-ID ${state.authKey}`
  //     }
  //   })
  //     .then((res) => res.json())
  //     .then((data) => commit('setImages', data))
  //     .catch((err) => console.log(err.message));

  //   console.log(state.authKey);
  // }
};

const mutations = {
  setImages: (state, data) => {
    console.log(data);
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
