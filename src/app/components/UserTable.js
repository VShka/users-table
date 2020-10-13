import $ from 'jquery';

export default class UserTable {
  constructor (container, createUserMethod, popupConfirmCloseMethod, firebase) {
    this.container = container;
    this.createUserMethod = createUserMethod;
    this.popupConfirmCloseMethod = popupConfirmCloseMethod;
    this.confirmDeleteBtn = document.querySelector('.button_confirm');
    this.firebase = firebase;

    //форма добавления юзера
    this.addForm = $('#add-user-form');


    this._setEventListener();
  }

  //метод отрисовки в DOM
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

  _removeUser(event) {
    // получаем елемент строки текущего юзера
    const element = event.target.closest('.user-table__row');
    // получаем ID юзера, присвоенный при создании в data-аргумент
    const currentUserID = element.getAttribute('data-userid');

    // при подтверждении делаем удаление пользователя
    this.confirmDeleteBtn.onclick = () => {
      // удаляем юзера из БД по ID
      this.firebase.deleteUser(currentUserID);
      // удаляем из DOM
      element.remove();
      this.popupConfirmCloseMethod();
    }
      
  }

  _setEventListener() {
    // добавление нового пользователя 
    $(this.addForm).on('submit', (event) => {
      event.preventDefault();
      this._addNewUser();
      // очищаем форму(переделать)
      document.querySelector('#add-user-form').reset();
    });
    // удаление пользователя
    $(this.container).on('click', '.button_delete', (event) => {
      this._removeUser(event);
    }); 

  }
}