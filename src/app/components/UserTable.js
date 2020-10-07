import $ from 'jquery';

export default class UserTable {
  constructor (container, createUserMethod) {
    this.container = container;
    this.createUserMethod = createUserMethod;

  }

  addUser(userTemplate) {
    $(this.container).append(userTemplate);
  }

  downloadingUsers(arrUsers) {
    arrUsers.forEach(item => {
      this.addUser(this.createUserMethod(item));
    })
  }
}