import $ from 'jquery';

export default class User {
  constructor(popupConfirmCloseMethod, firebase) {
    this.popupConfirmCloseMethod = popupConfirmCloseMethod;
    this.firebase = firebase;
    
    this.confirmBtn = $('.button_confirm');

    this._setEventListener();
  }


  createTemplate(user) {
    
    // html разметка на pug
    const template = $(`
      <div class="user-table__row" data-userid="${user.id}">
        <p class="user-table__item">${user.name}</p>
        <p class="user-table__item">${user.birthday}</p>
        <p class="user-table__item">${user.placeOfBirth}</p>
        <p class="user-table__item">${user.email}</p>
        <p class="user-table__item">${user.phone}</p>
        <p class="user-table__item">${user.dateReg}</p>
        <p class="user-table__item">${user.dateLastVisit}</p>
        <p class="user-table__item">
          <button class="button button_edit">Редактировать</button>
        </p>
        <p class="user-table__item">
          <button class="button button_delete">Удалить</button>
        </p>
      </div>
    `)

    return template;
  }

  _removeUser(event) {
    // получаем елемент строки текущего юзера
    const element = event.target.closest('.user-table__row');
    // получаем ID юзера, присвоенный при создании в data-аргумент
    const currentUserID = element.getAttribute('data-userid');


    // проблема => навешивание обработчика каждый раз при открытии модалки, что приводит к двойному
    // (тройному и т.д.) срабатыванию.
    $(this.confirmBtn).on('click', () => {
      // удаляем юзера из БД по ID
      this.firebase.deleteUser(currentUserID);
      // удаляем из DOM
      element.remove();
      this.popupConfirmCloseMethod();
    })
      
  }

  _setEventListener() {
    $('.user-table').on('click', '.button_delete', (event) => {
      this._removeUser(event);
    }); 
  }
}