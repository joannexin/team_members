import React, { Component } from 'react';
import MemberList from '../containers/MemberList';
import Edit from '../containers/Edit';
import MemberNumber from '../containers/MemberNumber';
import { addMember } from '../actions/index';

export default class Home extends Component {
  render() {
    return (
      <div>
        <i className="fa fa-plus" aria-hidden="true"></i>
        <h3>Team members</h3>
        <MemberNumber />
        <MemberList />
        <Edit />
      </div>
    );
  }
}
