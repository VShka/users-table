import $ from 'jquery';

export default class Popup {
  constructor() {
    this.addButton = $('.button_add');
    this.modalMask = $('.modal-mask');

    // this.addBtn = document.querySelector('.button_add');
    // this.modalMask = document.querySelector('.modal-fade');

    this.setEventListener();
    // this._open();
    // this._close();

  }

  _open() {

    this.modalMask.classList.add('form_show');
    
    // $(this.addButton).on('click', () => {
    //   this.modalMask.show();
    // })
  }

  _close() {

    // $(document).on('keydown', (evt) => {
    //   if (evt.keyCode == 27) {
    //     this.modalMask.hide();
    //   }
    // })

    this.modalMask.classList.remove('form_show');
  }

  setEventListener() {
    this.addBtn.addEventListener('click', () => {
      this._open();
    })

    window.addEventListener('keydown', (e) => {
      if (e.key == "Escape") {
        this._close();
      }
    })
  }
}