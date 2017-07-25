import React, { Component } from 'react';
import User from '../../components/user/User';
import { observer } from 'mobx-react';

class Users extends Component {
  componentDidMount() {
  }

  render() {
    const { users } = this.props;
// <div>{`Users count: ${users.count}`}</div>
    return (
      <div>

        <ul>
          {!!users && users.data.map(user => <li key={user.id}><User {...user}/></li>)}
        </ul>
      </div>
    );
  }
}

export default observer(Users);
