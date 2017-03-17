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

  render() {
    return (
      <div>
        <Link to="/"><i className="fa fa-times"></i></Link>

        <form onSubmit={this.handleFormSubmit.bind(this)}>
          <h3>Add a team member</h3>
          <p>Add contact info, location and role.</p>

          <hr/>

          <label>Info</label>
          <br/>
          <field>
            <input type="text" value={this.state.firstname} onChange={this.handleChange.bind(this, 'firstname')} placeholder="firstname"/>
          </field>
          <br/>
          <field>
            <input type="text" value={this.state.lastname} onChange={this.handleChange.bind(this, 'lastname')} placeholder="lastname"/>
          </field>
          <br/>
          <field>
            <input type="text" value={this.state.email} onChange={this.handleChange.bind(this, 'email')} placeholder="email"/>
          </field>
          <br/>
          <field>
            <input type="text" value={this.state.phone} onChange={this.handleChange.bind(this, 'phone')} placeholder="phone"/>
          </field>
          <br/>


          <button type="submit">Save</button>

        </form>
      </div>
    );
  }
}


{/* <label>Role</label>
  <br/>
  <field>
  <input type="radio" name="regular" value="regular" /> Regular - Can't delete members
</field>
<field>
<input type="radio" name="admin" value="admin" /> Admin - Can delete members
</field>
<br/> */}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addMember: addMember }, dispatch);
}

export default connect(null, mapDispatchToProps)(Add);