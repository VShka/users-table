import $ from 'jquery';

export default class Popup {
  constructor(btnClass, openBtn, closeBtn, modal,) {
    this.btnClass = btnClass;
    this.openBtn = openBtn;
    this.closeBtn = closeBtn;
    this.modal = modal;

    this._methodsInit();
  }

  _open() {
    // проверка на кнопку добавления пользователя, т.к. она одна на старнице
    if ($(this.openBtn).is('.button_add')) {
      $(this.openBtn).on('click', () => {
        $(this.modal).show();
      })
    }
    // здесь используем делегирование, так как кнопки динамически добавляются вместе с новыми пользователями
    $('.user-table').on('click', this.btnClass, () => {
      $(this.modal).show();
    })
  }

  _close() {
    $(this.closeBtn).on('click', (evt) => {
      evt.preventDefault();
      $(this.modal).hide();
    })

    $(document).on('keydown', (evt) => {
      if (evt.key == "Escape") {
        $(this.modal).hide();
      }
    })
  }

  _methodsInit() {
    this._open();
    this._close();
  }
}