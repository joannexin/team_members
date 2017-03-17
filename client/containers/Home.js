import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { editMember } from '../actions/index';
import { bindActionCreators } from 'redux';

class Home extends Component {

  renderList() {
    return this.props.members.map((member) => {
      return (
        <a key={member.id} onClick={() => this.props.editMember(member)} className="list-group-item">
          <i className="fa fa-user" aria-hidden="true"></i>
          <div>{member.firstname} {member.lastname}</div>
          <div>{member.phone}</div>
          <div>{member.email}</div>
        </a>
      );
    });
  }

  render() {
    return (
      <div>
        <Link to="/add"><i className="fa fa-plus"></i></Link>
        <h3>Team members</h3>
        <p>You have {this.props.members.length} team members.</p>
        <ul className="list-group col-sm-4">
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    members: state.memberReducer.members
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ editMember: editMember }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
