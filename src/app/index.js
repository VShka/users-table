import '../styles/style.scss';

import $ from 'jquery';

import Popup from './components/Popup';
import Firebase from './components/Firebase';
import UserTable from './components/UserTable';
import User from './components/User';

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
// контейнер для таблицы
const tableContainer = $('.user-table');

const polina = {
  name: 'Shkarupa PN',
  birthday: '12.09.1995',
  placeOfBirth: 'Vladivostok',
  email: 'polina@yandex.ru',
  phone: '788989991212',
  dateReg: Date.now(),
  dateLastVisit: '05.10.2020'
}

// инстансы классов
const popupForm = new Popup(openAddUser, closeModal, addModal);
const popupEdit = new Popup(openEditUser, closeModal, addModal);
const popupConfirm = new Popup(openDeleteUser, closeModal, confirmModal);

const user = new User();
const userTable = new UserTable(tableContainer);




$(addBtn).on('click', () => {
  
  userTable.addUser(user.create(polina));
})
