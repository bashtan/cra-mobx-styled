import { extendObservable, computed } from 'mobx';

class Users {
  constructor() {
    this._list = [];
    extendObservable(this, {
      list: [],
      count: computed(() => this.list.length),
      data: computed(() => this.list.map(user => ({
        ...user,
        age: computed(() => (new Date()).getUTCFullYear() - user.dateOfBirth.getUTCFullYear())
      }))),
    });
  }

  addUser = ({name, dateOfBirth}) => {
    this.list.push(new User({name, dateOfBirth}))
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