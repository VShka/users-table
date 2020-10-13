import $ from 'jquery';

export default class User {
  constructor( ) {
    
  }


  createTemplate(user) {
    
    const template = $(`
      <div class="user-table__row" data-userid="${user.id}">
        <p class="user-table__item name">${user.name}</p>
        <p class="user-table__item birthday">${user.birthday}</p>
        <p class="user-table__item place-birth">${user.placeOfBirth}</p>
        <p class="user-table__item email">${user.email}</p>
        <p class="user-table__item phone">${user.phone}</p>
        <p class="user-table__item ">${user.dateReg}</p>
        <p class="user-table__item last-visit">${user.dateLastVisit}</p>
        <p class="user-table__item ">
          <button class="button button_edit">Редактировать</button>
        </p>
        <p class="user-table__item">
          <button class="button button_delete">Удалить</button>
        </p>
      </div>
    `)

    return template;
  }
}