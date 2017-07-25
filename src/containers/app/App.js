import React, { Component } from 'react';
import Header from '../../components/header/Header';
import Counter from '../../components/counter/Counter';
import CreateUser from '../../components/createUser/CreateUser';

import List from '../list/List';
import Users from '../users/Users';
import { observer } from 'mobx-react';
import {AppContainer, AppIntro} from './styles';
import './App.css';

class App extends Component {
  render() {
    const {counter, users} = this.props;
//  <CreateUser onAdd={users.addUser}/>
    return (
      <AppContainer>
        <Header/>
        <AppIntro>
          Mobx App
        </AppIntro>
        <List/>
        <Counter {...counter}/>

        <Users users={users}/>
      </AppContainer>
    );
  }
}

export default observer(App);
