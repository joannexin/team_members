import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { updateMember, deleteMember } from '../actions/index';
import { bindActionCreators } from 'redux';

class Edit extends Component {
  constructor() {
    super();
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const attributes = { id: this.props.member.id };
    ['firstname', 'lastname', 'email', 'phone'].forEach((a) => {
      attributes[a] = this[a].value;
    })
    this.props.updateMember(attributes);
  }

  render() {
    return (
      <div>
        <Link to="/"><i className="fa fa-times fa-3x"></i></Link>

        <form onSubmit={this.handleFormSubmit.bind(this)}>
          <h3>Edit team member</h3>
          <p>Edit contact info, location and role.</p>

          <hr/>

          <label className="control-label">Info</label>
          <br/>
          <div className="formfield">
            <field>
              <input className="form-control" type="text" ref={(input) => this.firstname = input} placeholder="firstname" defaultValue={this.props.member.firstname}/>
            </field>
            <br/>
            <field>
              <input className="form-control" type="text" ref={(input) => this.lastname = input} placeholder="lastname" defaultValue={this.props.member.lastname}/>
            </field>
            <br/>
            <field>
              <input className="form-control" type="text" ref={(input) => this.email = input} placeholder="email" defaultValue={this.props.member.email}/>
            </field>
            <br/>
            <field>
              <input className="form-control" type="text" ref={(input) => this.phone = input} placeholder="phone" defaultValue={this.props.member.phone}/>
            </field>
          </div>
          <br/>

          <button type="submit" className="btn btn-primary">Save</button>

        </form>
        <button onClick={() => this.props.deleteMember(this.props.member)} className="btn btn-danger">Delete</button>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    member: state.memberReducer.currentMember
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateMember, deleteMember }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
