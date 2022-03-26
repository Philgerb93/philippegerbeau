import Vue from 'vue';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';
import { faStopwatch, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
 
library.add(faStopwatch, faSearchengin, faLaptopCode);
Vue.component('fa-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
  }).$mount('#app')
