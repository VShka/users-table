import $ from 'jquery';

export default class User {
  constructor() {

  }


  create(props) {
    
    // html разметка на pug
    const template = $(`
      <div class="user-table__row">
        <p class="user-table__item">${props.name}</p>
        <p class="user-table__item">${props.birthday}</p>
        <p class="user-table__item">${props.placeOfBirth}</p>
        <p class="user-table__item">${props.email}</p>
        <p class="user-table__item">${props.phone}</p>
        <p class="user-table__item">${props.dateReg}</p>
        <p class="user-table__item">${props.dateLastVisit}</p>
        <p class="user-table__item">
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