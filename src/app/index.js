import '../styles/style.scss';

import $ from 'jquery';

import Popup from './components/Popup';
import Firebase from './components/Firebase';
import UserTable from './components/UserTable';
import User from './components/User';
import UserInfo from './components/UserInfo';

// внешние кнопки
const openAddUser = $('.button_add');
const openDeleteUser = $('.button_delete');
const openEditUser = $('.button_edit');
//модалки
const modalAddForm = $('#modal-form');
const modalEditForm = $('#edit-form');
const confirmModal = $('#modal-confirm');
// контейнер для таблицы
const tableContainer = $('.user-table');
// форма редактирования данных
const editUserInfoForm = document.forms.edit;
// поля формы редактирования данных
const [nameInput, dateInput, placeInput, emailInput, phoneInput] = editUserInfoForm.elements;
const confirmBtn = editUserInfoForm.elements.confirmBtn;



// инстансы классов
const popupForm = new Popup('.button_add', openAddUser, modalAddForm);
const popupEdit = new Popup('.button_edit', openEditUser, modalEditForm);
const popupConfirm = new Popup('.button_delete', openDeleteUser, confirmModal);

const firebase = new Firebase();
const user = new User();
const userTable = new UserTable(
  tableContainer,
  user.createTemplate,
  popupConfirm.close.bind(popupConfirm),
  firebase
);
const userInfo = new UserInfo({
  nameInput,
  dateInput,
  placeInput,
  emailInput,
  phoneInput,
  confirmBtn,
  tableContainer,
  firebase
});


// отрисовываем полученных пользователей при инициализации приложения
userTable.downloadingUsers();