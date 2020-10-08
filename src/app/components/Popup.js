import $ from 'jquery';

export default class Popup {
  constructor(btnClass, openBtn, closeBtn, modal,) {
    this.btnClass = btnClass;
    this.openBtn = openBtn;
    this.closeBtn = closeBtn;
    this.modal = modal;

    this._setEventListener();
  }

  _open() {
    $(this.modal).show();
  }

  close() {
    $(this.modal).hide(); 
  }

  _setEventListener() {

    // проверка на кнопку добавления пользователя, т.к. она одна на старнице
    if ($(this.openBtn).is('.button_add')) {
      $(this.openBtn).on('click', () => {
        this._open();
      })
    }

    // здесь используем делегирование, так как кнопки динамически добавляются вместе с новыми пользователями
    $('.user-table').on('click', this.btnClass, () => {
      this._open();
    })

    $(this.closeBtn).on('click', (evt) => {
      evt.preventDefault();
      this.close();
    })

    $(document).on('keydown', (evt) => {
      if (evt.key == "Escape") {
        this.close();
      }
    })
  }
}