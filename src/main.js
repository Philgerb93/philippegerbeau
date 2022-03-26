import Vue from 'vue';
import App from './App.vue';
import Vuelidate from 'vuelidate'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';
import { faStopwatch, faLaptopCode, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
 
library.add(faStopwatch, faSearchengin, faLaptopCode, faEnvelope);
Vue.component('fa-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(Vuelidate);

new Vue({
	render: h => h(App),
  }).$mount('#app')
