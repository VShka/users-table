import $ from 'jquery';

export default class User {
  constructor() {

  }


  create(props) {
    
    // html разметка на pug
    const template = $(`
      .user-table__row
        p.user-table__item ${props.name}
        p.user-table__item ${props.birthday}
        p.user-table__item ${props.placeOfBirth}
        p.user-table__item ${props.email}
        p.user-table__item ${props.phone}
        p.user-table__item ${props.dateReg}
        p.user-table__item ${props.dateLastVisit}
        p.user-table__item
          button.button.button_edit Редактировать
        p.user-table__item
          button.button.button_delete Удалить
    `)

    return template;
  }
}