import $ from 'jquery';

export default class Popup {
  constructor() {
    this.addButton = $('.button_add');
    this.modalFade = $('.modal-fade');

    // this.addBtn = document.querySelector('.button_add');
    // this.modalFade = document.querySelector('.modal-fade');

    this.setEventListener();
    // this._open();
    // this._close();

  }

  _open() {

    this.modalFade.classList.add('form_show');
    
    // $(this.addButton).on('click', () => {
    //   this.modalFade.show();
    // })
  }

  _close() {

    // $(document).on('keydown', (evt) => {
    //   if (evt.keyCode == 27) {
    //     this.modalFade.hide();
    //   }
    // })

    this.modalFade.classList.remove('form_show');
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