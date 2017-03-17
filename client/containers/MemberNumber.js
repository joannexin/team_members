import React, { Component } from 'react';
import { connect } from 'react-redux';

class MemberNumber extends Component {
  renderNumber() {
    return this.props.members.length;
  }

  render() {
    if (this.props.members) {
      return (
        <p>You have {this.renderNumber()} team members.</p>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    members: state.members
  };
}

export default connect(mapStateToProps)(MemberNumber);
