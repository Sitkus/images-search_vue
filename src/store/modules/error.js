const state = {
  errorMessage: ''
};

const getters = {
  errorMessage: (state) => state.errorMessage
};

const actions = {
  showError({ commit }, msg) {
    commit('showErrorMessage', msg);
  },
  removeError({ commit }) {
    commit('removeErrorMessage');
  }
};

const mutations = {
  showErrorMessage: (state, msg) => {
    state.errorMessage = msg;
  },
  removeErrorMessage: (state) => {
    state.errorMessage = '';
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
