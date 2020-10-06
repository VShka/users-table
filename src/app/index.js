import '../styles/style.scss';

import $ from 'jquery';

import Popup from './components/Popup';

// кнопки
const openAddUser = $('.button_add');
const openDeleteUser = $('.button_delete');
const openEditUser = $('.button_edit');
const closeModal = $('.button_close');
const addBtn = $('.form__item_add');
const confirmBtn = $('.button_confirm');
//модалки
const addModal = $('#modal-form');
const confirmModal = $('#modal-confirm');


const popupForm = new Popup(openAddUser, closeModal, addModal);
const popupEdit = new Popup(openEditUser, closeModal, addModal);
const popupConfirm = new Popup(openDeleteUser, closeModal, confirmModal);


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
