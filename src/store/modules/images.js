const namespaced = true;

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
  setIsLoading({ commit }, isLoading) {
    commit('setIsLoading', isLoading);
  },
  getImages({ commit, dispatch }, url) {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Client-ID ${state.authKey}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0 || data.results.length > 0) {
          commit('setIsLoading', false);
          commit('setImages', data.results ? data.results : data);
        } else {
          dispatch('error/showError', "We couldn't find any images with your search term, try something else", {
            root: true
          });
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch('error/showError', `Something went wrong with an API server, please check console...`, {
          root: true
        });
      });
  }
};

const mutations = {
  setIsLoading: (state, isLoading) => (state.isLoading = isLoading),
  setImages: (state, data) => (state.images = data)
};

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
