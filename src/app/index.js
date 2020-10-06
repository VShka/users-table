import '../styles/style.scss';

import $ from 'jquery';

import Popup from './components/Popup';

// const openAddForm = document.querySelector('.button_add');
const openAddForm = $('.button_add');
const openEditForm = $('.button_edit');
const closeEditForm = $('.button_close');
const formModal = $('#modal-confirm');


const popup = new Popup(openEditForm, closeEditForm, formModal);

// import firebase from 'firebase/app';
// import 'firebase/database';

// // инициализация конфига firebase
// firebase.initializeApp({
//   apiKey: "AIzaSyD0T-q6wnsseCiMMx28syBMcS1mjWzk294",
//   authDomain: "user-tab.firebaseapp.com",
//   databaseURL: "https://user-tab.firebaseio.com",
//   projectId: "user-tab",
//   storageBucket: "user-tab.appspot.com",
//   messagingSenderId: "1021217407977",
//   appId: "1:1021217407977:web:fcb00f7ec62859050bc178"
// });
