const namespaced = true;

const state = {
  errorMessage: ''
};

const getters = {
  errorMessage: (state) => state.errorMessage
};

const actions = {
  showError({ commit }, msg) {
    commit('SHOW_ERROR', msg);
  },
  removeError({ commit }) {
    commit('REMOVE_ERROR');
  }
};

const mutations = {
  SHOW_ERROR: (state, msg) => {
    state.errorMessage = msg;
  },
  REMOVE_ERROR: (state) => {
    state.errorMessage = '';
  }
};

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
