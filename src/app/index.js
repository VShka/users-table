import '../styles/style.scss';

import $ from 'jquery';

// import Popup from './components/Popup';

const openAddForm = document.querySelector('.button_add');
// const popup = new Popup();

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

// открытие попапов
$('.button_add, .button_edit').on('click', function() {
  $('.modal-mask').show();
  $('.form').addClass('form_show');
})

// $('.button_edit').on('click', () => {
//   $('.modal-mask').show();
// })
// закрытие попапов
$(document).on('keydown', (evt) => {
  if (evt.key == "Escape") {
    $('.modal-mask').hide();
  }
})