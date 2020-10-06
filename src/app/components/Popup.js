import $ from 'jquery';

export default class Popup {
  constructor(openBtn, closeBtn, modal,) {

    this.openBtn = openBtn;
    this.closeBtn = closeBtn;
    this.modal = modal;

    this._methodsInit();
  }

  _open() {
    $(this.openBtn).on('click', () => {
      $(this.modal).show();
    })
  }

  _close() {
    $(this.closeBtn).on('click', () => {
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