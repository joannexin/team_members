import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { editMember } from '../actions/index';
import { bindActionCreators } from 'redux';

class Home extends Component {

  renderList() {
    return this.props.members.map((member) => {
      return (
        <a key={member.id} onClick={() => this.props.editMember(member)} className="list-group-item list-group-item-action">
          <div>
            <i className="fa fa-user-circle fa-3x" aria-hidden="true"></i>
          </div>

          <div>
            <div>{member.firstname} {member.lastname} {member.checked === "admin" ? `(${member.checked})` : ''}</div>
            <div>{member.phone}</div>
            <div>{member.email}</div>
          </div>
        </a>
      );
    });
  }

  render() {
    return (
      <div>
        <Link to="/add"><i className="fa fa-plus fa-3x"></i></Link>
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
// whenever editMember is called, the result will pass to all the reducers
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ editMember: editMember }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
