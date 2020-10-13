import $ from 'jquery';

export default class UserInfo{
  constructor({nameInput, dateInput, placeInput, emailInput, phoneInput, confirmBtn, tableContainer}) {
    this.nameInput = nameInput;
    this.dateInput = dateInput;
    this.placeInput = placeInput;
    this.emailInput = emailInput;
    this.phoneInput = phoneInput;
    this.confirmBtn = confirmBtn;
    this.tableContainer = tableContainer;

    this._setEventListener();
  }


  _setCurrentInfo(element) {
    // поля персональных данных пользователя
    const userName = element.querySelector('.name');
    const birthday = element.querySelector('.birthday');
    const placeOfBirth = element.querySelector('.place-birth');
    const email = element.querySelector('.email');
    const phone = element.querySelector('.phone');

    // подставляем в инпуты актуальные значения данных
    this.nameInput.value = userName.textContent;
    this.dateInput.value = birthday.textContent;
    this.placeInput.value = placeOfBirth.textContent;
    this.emailInput.value = email.textContent;
    this.phoneInput.value = phone.textContent;
  }

  _updateInfo(element) {
    // поля персональных данных пользователя
    const userName = element.querySelector('.name');
    const birthday = element.querySelector('.birthday');
    const placeOfBirth = element.querySelector('.place-birth');
    const email = element.querySelector('.email');
    const phone = element.querySelector('.phone');
    const lastVisit = element.querySelector('.last-visit');
  
    // подставляем измененные данные в поля о пользователе
    userName.textContent = this.nameInput.value;
    birthday.textContent = this.dateInput.value;
    placeOfBirth.textContent = this.placeInput.value;
    email.textContent = this.emailInput.value;
    phone.textContent = this.phoneInput.value;
    lastVisit.textContent = Date.now();
  }

  _setEventListener() {
    // выбирает пользователя по которому кликнули
    $(this.tableContainer).on('click', '.button_edit', event => {
      const element = event.target.closest('.user-table__row');
      // устанавливаем текущие значения в форму
      this._setCurrentInfo(element);

      // при подтверждении изменений устанавливаем изменённые значения
      this.confirmBtn.onclick = () => {
        this._updateInfo(element);
      };
    })
  }
}