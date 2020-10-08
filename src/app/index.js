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

const addBtn = $('#add-user');
const confirmBtn = $('.button_confirm');
//модалки
const modalAddForm = $('#modal-form');
const modalEditForm = $('#edit-form');
const confirmModal = $('#modal-confirm');
// контейнер для таблицы
const tableContainer = $('.user-table');


// массив объектов юзер
const usersList = [
  {
    name: 'Шкарупа ПН',
    birthday: '12.09.1995',
    placeOfBirth: 'Краснодар',
    email: 'polina@yandex.ru',
    phone: '788989879',
    dateReg: Date.now(),
    dateLastVisit: '05.10.2020'
  },
  {
    name: 'Шкарупа ПН',
    birthday: '12.09.1995',
    placeOfBirth: 'Краснодар',
    email: 'polina@yandex.ru',
    phone: '788989879',
    dateReg: Date.now(),
    dateLastVisit: '05.10.2020'
  },
  {
    name: 'Шкарупа ПН',
    birthday: '12.09.1995',
    placeOfBirth: 'Краснодар',
    email: 'polina@yandex.ru',
    phone: '788989879',
    dateReg: Date.now(),
    dateLastVisit: '05.10.2020'
  }
]

// инстансы классов
const popupForm = new Popup('.button_add', openAddUser, modalAddForm);
const popupEdit = new Popup('.button_edit', openEditUser, modalEditForm);
const popupConfirm = new Popup('.button_delete', openDeleteUser, confirmModal);

const user = new User();
const userTable = new UserTable(tableContainer, user.createTemplate, usersList);

// отрисовываем полученных пользователей при инициализации приложения
userTable.downloadingUsers(usersList);



// удаление юзера из DOM
$('.user-table').on('click', '.button_delete', (event) => {
  
  let flag = false;
  $('.button_confirm').on('click', () => {
    flag = true;

    if (flag) {
      event.target.closest('.user-table__row').remove();

      popupConfirm.close();
    }
  })
})

