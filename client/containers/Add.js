import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { addMember, updateRole } from '../actions/index';
import { bindActionCreators } from 'redux';

class Add extends Component {
  componentWillMount() {
    this.props.member.checked = "regular";
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.props.addMember({
      firstname: this.firstNameRef.value,
      lastname: this.lastNameRef.value,
      email: this.emailRef.value,
      phone: this.phoneRef.value,
      checked: this.props.member.checked,
    });
  }

  handleOptionChange(e) {
    this.props.updateRole(e.target.value);
  }

  render() {
    return (
      <div className="outerContainer">
        <Link to="/"><i className="fa fa-times fa-3x"></i></Link>

        <form data-toggle="validator" onSubmit={this.handleFormSubmit.bind(this)}>
          <h3>Add a team member</h3>
          <p>Set email, location and role.</p>

          <hr/>

          <label className="control-label">Info</label>
          <br/>
          <div>
            <input className="form-control" type="text" ref={(input) => this.firstNameRef = input} placeholder="firstname" required />
            <br/>
            <input className="form-control" type="text" ref={(input) => this.lastNameRef = input} placeholder="lastname" required />
            <br/>
            <input className="form-control" type="email" ref={(input) => this.emailRef = input} placeholder="email" required />
            <br/>
            <input className="form-control" type="tel" pattern="^\d{3}-\d{3}-\d{4}$" ref={(input) => this.phoneRef = input} placeholder="phone (xxx-xxx-xxxx)" required />
          </div>
          <br/>

          <label className="control-label">Role</label>
          <hr/>
          <div>
            <label>
              <input type='radio' value='regular' checked={this.props.member.checked === 'regular'} onChange={this.handleOptionChange.bind(this)}/>
              <span> Regular - Cannot delete members</span>
            </label>
            <br/>
            <hr/>
            <label>
              <input type='radio' value='admin' checked={this.props.member.checked === 'admin'} onChange={this.handleOptionChange.bind(this)}/>
              <span> Admin - Can delete members</span>
            </label>
          </div>
          <hr/>
          <button type="submit" className="btn btn-primary">Save</button>

        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    member: state.memberReducer.currentMember
  };
}

// whenever addMember is called, the result will pass to all the reducers
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addMember, updateRole }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Add);
