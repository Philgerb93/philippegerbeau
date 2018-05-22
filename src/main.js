import Vue from 'vue'
import App from './App.vue'
import firebase from './../node_modules/firebase'

const config = {
	apiKey: "AIzaSyBLFjgOxDh_71EByeuwfT5wUCR6-31xmic",
	authDomain: "philippege-cc0d4.firebaseapp.com",
	databaseURL: "https://philippege-cc0d4.firebaseio.com",
	projectId: "philippege-cc0d4",
	storageBucket: "philippege-cc0d4.appspot.com",
	messagingSenderId: "473560697284"
};
Vue.prototype.$firebase = firebase.initializeApp(config);

const firestore = firebase.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);

new Vue({
  el: '#app',
  render: h => h(App)
})
