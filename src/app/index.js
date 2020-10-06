import '../styles/style.scss';

import $ from 'jquery';

import Popup from './components/Popup';
import Firebase from './components/Firebase';

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



