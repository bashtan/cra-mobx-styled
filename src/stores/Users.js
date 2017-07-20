import { extendObservable, computed } from 'mobx';

class Users {
  constructor() {
    this._list = [];
    extendObservable(this, {
      list: this._list.map(user => ({
        ...user,
          age: computed(() => user.dateOfBirth.getUTCFullYear() - (new Date()).getUTCFullYear())
      })),
      count: computed(() => this.list.length)
    });
  }

  addUser = ({name, dateOfBirth}) => {
    this._list.push(new User({name, dateOfBirth}))
  }
}

class User{
  constructor({name, dateOfBirth}) {
    this.id = Math.random();
    this.name = name;
    this.dateOfBirth = dateOfBirth;
  }
}

export default Users;