export default class UserInfo{
  constructor({nameInput, dateInput, placeInput, emailInput, phoneInput}) {
    this.nameInput = nameInput;
    this.dateInput = dateInput;
    this.placeInput = placeInput;
    this.emailInput = emailInput;
    this.phoneInput = phoneInput;
  }


  setCurrentInfo(event) {
    const element = event.target.closest('.user-table__row');

    // поля персональных данных пользователя
    const userName = element.querySelector('.name');
    const birthday = element.querySelector('.birthday');
    const placeOfBirth = element.querySelector('.place-birth');
    const email = element.querySelector('.email');
    const phone = element.querySelector('.phone');
    const lastVisit = element.querySelector('.last-visit');

    // подставляем в инпуты актуальные значения данных
    this.nameInput.value = userName.textContent;
    this.dateInput.value = birthday.textContent;
    this.placeInput.value = placeOfBirth.textContent;
    this.emailInput.value = email.textContent;
    this.phoneInput.value = phone.textContent;
  }
  
}