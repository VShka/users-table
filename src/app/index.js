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



// инстансы классов
const popupForm = new Popup('.button_add', openAddUser, modalAddForm);
const popupEdit = new Popup('.button_edit', openEditUser, modalEditForm);
const popupConfirm = new Popup('.button_delete', openDeleteUser, confirmModal);

const firebase = new Firebase();
const user = new User(popupConfirm.close.bind(popupConfirm));
const userTable = new UserTable(tableContainer, user.createTemplate, firebase);

firebase.getAllUsers();
// отрисовываем полученных пользователей при инициализации приложения
// userTable.downloadingUsers(usersList);
