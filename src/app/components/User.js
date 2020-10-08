import $ from 'jquery';

export default class User {
  constructor(popupConfirmCloseMethod) {
    this.popupConfirmCloseMethod = popupConfirmCloseMethod;
  
    
    this.confirmBtn = $('.button_confirm');

    this._setEventListener();
  }


  createTemplate(user) {
    
    // html разметка на pug
    const template = $(`
      <div class="user-table__row">
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

      let flag = false;
      $(this.confirmBtn).on('click', () => {
        flag = true;

        if (flag) {
          event.target.closest('.user-table__row').remove();
          this.popupConfirmCloseMethod();
        }
      })
  }

  _setEventListener() {
    $('.user-table').on('click', '.button_delete', (event) => {
      this._removeUser(event)
    });
  }
}