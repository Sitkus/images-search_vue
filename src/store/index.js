import { createStore } from 'vuex';
import { error, images } from './modules';

export default createStore({
  modules: {
    error,
    images
  }
});
