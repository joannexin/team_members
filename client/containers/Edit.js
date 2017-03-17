import React, { Component } from 'react';
import { connect } from 'react-redux';

class Edit extends Component {

  handleChange(event) {
    event.preventDefault();
    console.log(event.target.value);
    let value = event.target.value;
  }

  render() {
    if (!this.props.member) {
      return <div></div>;
    }
    return (
      <div>
        <form>
          <h3>Edit team member</h3>
          <p>Edit contact info, location and role.</p>

          <hr/>

          <label>Info</label>
          <br/>
          <field>
            <input type="text" name="firstname" placeholder="firstname" defaultValue={this.props.member.firstname}/>
          </field>
          <br/>
          <field>
            <input type="text" name="lastname" placeholder="lastname" defaultValue={this.props.member.lastname}/>
          </field>
          <br/>
          <field>
            <input type="text" name="email" placeholder="email" defaultValue={this.props.member.email}/>
          </field>
          <br/>
          <field>
            <input type="text" name="phone" placeholder="phone" defaultValue={this.props.member.phone}/>
          </field>
          <br/>
          <label>Role</label>
          <br/>
          <field>
            <input type="radio" name="regular" value="regular" /> Regular - Can't delete members
          </field>
          <field>
            <input type="radio" name="admin" value="admin" /> Admin - Can delete members
          </field>

          <br/>

          <button type="submit">Delete</button>
          <button type="submit">Save</button>

        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    member: state.activeMember
  };
}

export default connect(mapStateToProps)(Edit);
