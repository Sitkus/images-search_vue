import { createStore } from 'vuex';
import { error } from './modules';

export default createStore({
  modules: {
    error
  }
});
