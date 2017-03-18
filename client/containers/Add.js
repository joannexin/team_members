import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { addMember } from '../actions/index';
import { bindActionCreators } from 'redux';

class Add extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      checked: "regular",
    };
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.props.addMember(this.state);
  }

  handleChange(field, e) {
    const change = {};
    change[field] = e.target.value;
    this.setState(change);
  }

  handleOptionChange(e) {
    this.setState({
      checked: e.target.value
    });
  }

  render() {
    return (
      <div>
        <Link to="/"><i className="fa fa-times fa-3x"></i></Link>

        <form onSubmit={this.handleFormSubmit.bind(this)}>
          <h3>Add a team member</h3>
          <p>Set email, location and role.</p>

          <hr/>

          <label className="control-label">Info</label>
          <br/>
          <div className="formfield">
            <input className="form-control" type="text" value={this.state.firstname} onChange={this.handleChange.bind(this, 'firstname')} placeholder="firstname"/>
            <br/>
            <input className="form-control" type="text" value={this.state.lastname} onChange={this.handleChange.bind(this, 'lastname')} placeholder="lastname"/>
            <br/>
            <input className="form-control" type="text" value={this.state.email} onChange={this.handleChange.bind(this, 'email')} placeholder="email"/>
            <br/>
            <input className="form-control" type="text" value={this.state.phone} onChange={this.handleChange.bind(this, 'phone')} placeholder="phone"/>
          </div>
          <br/>

          <label className="control-label">Role</label>
          <hr/>
          <div>
            <label>
              <input type='radio' value='regular' checked={this.state.checked === 'regular'} onChange={this.handleOptionChange.bind(this)}/>
              <span> Regular - Can't delete members</span>
            </label>
            <br/>
            <hr/>
            <label>
              <input type='radio' value='admin' checked={this.state.checked === 'admin'} onChange={this.handleOptionChange.bind(this)} />
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

// whenever addMember is called, the result will pass to all the reducers
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addMember: addMember }, dispatch);
}

export default connect(null, mapDispatchToProps)(Add);
