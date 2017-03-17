import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editMember } from '../actions/index';
import { bindActionCreators } from 'redux';

class MemberList extends Component {
  renderList() {
    return this.props.members.map((member) => {
      return (
        <div key={member.id} onClick={() => this.props.editMember(member)} className="list-group-item">
          <i className="fa fa-user" aria-hidden="true"></i>
          <div>{member.firstname} {member.lastname}</div>
          <div>{member.phone}</div>
          <div>{member.email}</div>
        </div>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    members: state.members
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ editMember: editMember }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberList);
