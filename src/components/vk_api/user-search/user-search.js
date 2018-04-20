import React, { Component } from 'react';
import SearchBar from '../../../containers/user-search/serach_bar'
import UserList from '../../../containers/user-search/user_list'

export default class UserSearch extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <UserList />
      </div>
    );
  }
}