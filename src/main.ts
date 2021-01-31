import { createApp } from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import store from './store';

library.add(faSearch);

createApp(App)
  .use(store)
  .component('fa', FontAwesomeIcon)
  .mount('#app');
