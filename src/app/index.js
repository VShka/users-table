import '../styles/style.scss';

import $ from 'jquery';

import Popup from './components/Popup';
// import Firebase from './components/Firebase';
import UserTable from './components/UserTable';
import User from './components/User';

// кнопки
const openAddUser = $('.button_add');
const openDeleteUser = $('.button_delete');
const openEditUser = $('.button_edit');
const closeModal = $('.button_close');
const addBtn = $('#add-user');
const confirmBtn = $('.button_confirm');
//модалки
const addForm = $('#modal-form');
const editForm = $('#edit-form');
const confirmModal = $('#modal-confirm');
// контейнер для таблицы
const tableContainer = $('.user-table');

const polina = {
  name: 'Шкарупа ПН',
  birthday: '12.09.1995',
  placeOfBirth: 'Краснодар',
  email: 'polina@yandex.ru',
  phone: '788989879',
  dateReg: Date.now(),
  dateLastVisit: '05.10.2020'
}

// инстансы классов
const popupForm = new Popup('.button_add', openAddUser, closeModal, addForm);
const popupEdit = new Popup('.button_edit', openEditUser, closeModal, editForm);
const popupConfirm = new Popup('.button_delete', openDeleteUser, closeModal, confirmModal);

const user = new User();
const userTable = new UserTable(tableContainer);




$(addBtn).on('click', () => {
  
  userTable.addUser(user.create(polina));
})
