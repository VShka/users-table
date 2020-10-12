import '../styles/style.scss';

import $ from 'jquery';

import Popup from './components/Popup';
import Firebase from './components/Firebase';
import UserTable from './components/UserTable';
import User from './components/User';

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
const confirmBtn = editUserInfoForm.elements.confirmBtn;



// инстансы классов
const popupForm = new Popup('.button_add', openAddUser, modalAddForm);
const popupEdit = new Popup('.button_edit', openEditUser, modalEditForm);
const popupConfirm = new Popup('.button_delete', openDeleteUser, confirmModal);

const firebase = new Firebase();
const user = new User(popupConfirm.close.bind(popupConfirm), firebase);
const userTable = new UserTable(tableContainer, user.createTemplate, firebase);


// отрисовываем полученных пользователей при инициализации приложения
userTable.downloadingUsers();

// выбирает пользователя по которому кликнули
$('.user-table').on('click', '.button_edit', event => {
  const element = event.target.closest('.user-table__row');

  // поля персональных данных пользователя
  const userName = element.querySelector('.name');
  const birthday = element.querySelector('.birthday');
  const placeOfBirth = element.querySelector('.place-birth');
  const email = element.querySelector('.email');
  const phone = element.querySelector('.phone');
  const lastVisit = element.querySelector('.last-visit');

  // поля формы редактирования данных
  const [nameInput, dateInput, placeInput, emailInput, phoneInput] = editUserInfoForm.elements;

  // подставляем в инпуты актуальные значения данных
  nameInput.value = userName.textContent;
  dateInput.value = birthday.textContent;
  placeInput.value = placeOfBirth.textContent;
  emailInput.value = email.textContent;
  phoneInput.value = phone.textContent;
})

// $(confirmBtn).on('click', () => {
//   // поля формы редактирования
//   const [nameInput, dateInput, placeInput, emailInput, phoneInput] = editUserInfoForm.elements;

//   // поля персональных данных пользователя
//   const userName = element.querySelector('.name');
//   const birthday = element.querySelector('.birthday');
//   const placeOfBirth = element.querySelector('.place-birth');
//   const email = element.querySelector('.email');
//   const phone = element.querySelector('.phone');
//   const lastVisit = element.querySelector('.last-visit');

//   // подставляем измененные данные в поля о пользователе
//   userName.textContent = nameInput.value;
//   birthday.textContent = dateInput.value;
//   placeOfBirth.textContent = placeInput.value;
//   email.textContent = emailInput.value;
//   phone.textContent = phoneInput.value;
//   lastVisit.textContent = Date.now();
// })