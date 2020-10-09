import $ from 'jquery';

export default class UserTable {
  constructor (container, createUserMethod, firebase) {
    this.container = container;
    this.createUserMethod = createUserMethod;
    this.firebase = firebase;

    //форма добавления юзера
    this.addForm = $('#add-user-form');


    this._setEventListener();
  }

  _renderUser(userTemplate) {
    $(this.container).append(userTemplate);
  }

  downloadingUsers() {
    this.firebase
    .getAllUsers()
    .then(data => {
      // преобразование слепка в массив объектов
      const usersArr = Object.values(data.val());
      usersArr.forEach(user => {
        this._renderUser(this.createUserMethod(user));
      })
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
      id: Date.now(),
      name: fullName,
      birthday: birthday,
      placeOfBirth: placeOfBirth,
      email: email,
      phone: phone,
      dateReg: Date.now(),
      dateLastVisit: Date.now()
    }
    // отправляем в БД
    this.firebase.downloadNewUser(newUser);
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