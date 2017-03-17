import React, { Component } from 'react';
import { connect } from 'react-redux';

class Add extends Component {

  render() {
    if (!this.props.member) {
      return <div></div>;
    }
    return (
      <div>
        <form>
          <h3>Add a team member</h3>
          <p>Add contact info, location and role.</p>

          <hr/>

          <label>Info</label>
          <br/>
          <field>
            <input type="text" name="firstname" placeholder="firstname"/>
          </field>
          <br/>
          <field>
            <input type="text" name="lastname" placeholder="lastname"/>
          </field>
          <br/>
          <field>
            <input type="text" name="email" placeholder="email"/>
          </field>
          <br/>
          <field>
            <input type="text" name="phone" placeholder="phone"/>
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
