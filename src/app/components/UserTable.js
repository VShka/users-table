import $ from 'jquery';

export default class UserTable {
  constructor (container, createUserMethod, usersArr) {
    this.container = container;
    this.createUserMethod = createUserMethod;
    this.usersArr = usersArr;

    //форма добавления юзера
    this.addForm = $('#add-user-form');


    this._setEventListener();
  }

  _renderUser(userTemplate) {
    $(this.container).append(userTemplate);
  }

  downloadingUsers(arrUsers) {
    arrUsers.forEach(template => {
      this._renderUser(this.createUserMethod(template));
    })
  }

  _addNewUser() {

    // находим все поля формы
    // прописал в таком виде, чтобы было максимально очевидно
    const fullName = $('input[name="fullName"]').val();
    const birthday = $('input[name="birthday"]').val();
    const placeOfBirth = $('input[name="placeOfBirth"]').val();
    const email = $('input[name="email"]').val();
    const phone = $('input[name="phone"]').val();

    // создаём новый объект юзера
    const newUser = {
      name: fullName,
      birthday: birthday,
      placeOfBirth: placeOfBirth,
      email: email,
      phone: phone,
      dateReg: Date.now(),
      dateLastVisit: Date.now()
    }

    // пушим в массив юзеров
    this.usersArr.push(newUser);

    // отрисовываем юзера в DOM
    this._renderUser(this.createUserMethod(newUser));
  }

  _setEventListener() {

    // добавление нового юзера 
    $(this.addForm).on('submit', (evt) => {
      evt.preventDefault();

      this._addNewUser();
      
      // очищаем форму
      $('#edit-user-form')[0].reset();
    });

  }
}