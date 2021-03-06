import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { updateRole, updateMember, deleteMember } from '../actions/index';
import { bindActionCreators } from 'redux';

class Edit extends Component {

  handleFormSubmit(e) {
    e.preventDefault();
    const attributes = { id: this.props.member.id };
    ['firstname', 'lastname', 'email', 'phone'].forEach((a) => {
      attributes[a] = this[a].value;
    })
    attributes.checked = this.props.member.checked;
    this.props.updateMember(attributes);

  }

  handleOptionChange(e) {
    this.props.updateRole(e.target.value);
  }

  handleDelete() {
    var confirmed = confirm("Are you sure you want to delete this member?");
    if (confirmed) {
      this.props.deleteMember(this.props.member);
    } else {
      return false;
    }
  }

  render() {
    return (
      <div className="outerContainer">
        <Link to="/"><i className="fa fa-times fa-3x"></i></Link>

        <form data-toggle="validator" onSubmit={this.handleFormSubmit.bind(this)}>
          <h3>Edit team member</h3>
          <p>Edit contact info, location and role.</p>

          <hr/>

          <label className="control-label">Info</label>
          <br/>
          <div>
            <input className="form-control" type="text" ref={(input) => this.firstname = input} placeholder="firstname" defaultValue={this.props.member.firstname} required />
            <br/>
            <input className="form-control" type="text" ref={(input) => this.lastname = input} placeholder="lastname" defaultValue={this.props.member.lastname} required />
            <br/>
            <input className="form-control" type="email" ref={(input) => this.email = input} placeholder="email" defaultValue={this.props.member.email} required />
            <br/>
            <input className="form-control" type="tel" pattern="^\d{3}-\d{3}-\d{4}$" ref={(input) => this.phone = input} placeholder="phone" defaultValue={this.props.member.phone} required />
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
        <button onClick={this.handleDelete.bind(this)} className="btn btn-danger">Delete</button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    member: state.memberReducer.currentMember
  };
}

// whenever updateMember and deleteMember is called, the result will pass to all the reducers
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateRole, updateMember, deleteMember }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
