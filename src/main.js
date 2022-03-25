import Vue from 'vue';
import App from './App.vue';
import firebase from './../node_modules/firebase';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faGitAlt, faLinkedin, faVuejs, faHtml5, faJsSquare, faCss3Alt, faSearchengin } from '@fortawesome/free-brands-svg-icons';
import { faUser, faUsers, faBolt, faStopwatch, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
 
library.add(faGithub, faGitAlt, faLinkedin, faUser, faUsers, faStopwatch,
	faVuejs, faHtml5, faJsSquare, faCss3Alt, faBolt, faSearchengin, faLaptopCode);
Vue.component('fa-icon', FontAwesomeIcon);

Vue.config.productionTip = false

const config = {
	apiKey: "AIzaSyBLFjgOxDh_71EByeuwfT5wUCR6-31xmic",
	authDomain: "philippege-cc0d4.firebaseapp.com",
	databaseURL: "https://philippege-cc0d4.firebaseio.com",
	projectId: "philippege-cc0d4",
	storageBucket: "philippege-cc0d4.appspot.com",
	messagingSenderId: "473560697284"
};
Vue.prototype.$firebase = firebase.initializeApp(config);

// const firestore = firebase.firestore();

new Vue({
	render: h => h(App),
  }).$mount('#app')
