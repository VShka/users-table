import $ from 'jquery';

export default class UserTable {
  constructor (container) {
    this.container = container;

  }

  addUser(userTemplate) {
    $(this.container).append(userTemplate);
  }
}