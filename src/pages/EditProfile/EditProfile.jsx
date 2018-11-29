import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getMember, editMember, deleteMember, addInput } from './actions';


export default class EditProfile extends Component {
  constructor(props) {
    super(props);
    //this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getMember());
  }

  handleChange(event) {
    const { dispatch } = this.props;
    const { id, value, type, checked } = event.target;
    if ( type === 'checkbox') {
      dispatch(addInput(id, checked));
    } else {dispatch(addInput(id, value));
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const { getMember, dispatch } = this.props;
    dispatch(editMember(getMember));
  }

  handleDelete() {
    const { getMember, dispatch } = this.props;
    dispatch(deleteMember(getMember));
  }

  render() {
    const { getMember } = this.props;
    return (
            <div>
        <h1>Edit Profile</h1>
        <form onSubmit={this.handleSubmit} name='editMember'>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input onChange={this.handleChange} value={getMember.firstName} type="text" className="form-control" id="firstName"/>
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input onChange={this.handleChange} value={getMember.lastName} type="text" className="form-control" id="lastName"/>
          </div>
          <div className="form-group">
            <label htmlFor="accountEmail">Account Email Address</label>
            <input onChange={this.handleChange} value={getMember.email} type="email" className="form-control" id="email"/><br />
            <small id="accountEmail" className="form-text text-muted">This email will not be shared with anyone.</small>
          </div><br />
          <div className="form-group">
            <label htmlFor="verifyPassword">Current Password</label>
            <input onChange={this.handleChange} type="text" value={getMember.verifyPassword} className="form-control" id="verifyPassword"/>
          </div>

          <h2>Account Profile Information</h2>

          <div className="form-group">
            <label htmlFor="headline">Headline/Title</label>
            <input onChange={this.handleChange} value={getMember.headline} type="text" className="form-control" id="headline"/>
          </div>
          <div className="form-group">
            <label htmlFor="shortBio">Short Bio</label>
            <input onChange={this.handleChange} value={getMember.bio} type="textarea" rows="4" cols="40" maxLength="500" className="form-control" id="bio"/>
          </div>
          <div className="form-group">
            <label htmlFor="avatar">Avatar URL</label>
            <input onChange={this.handleChange} value={getMember.avatar} type="text" className="form-control" id="avatar"/>
          </div>
          <div className="form-group">
            <label htmlFor="publicEmail">Public Email address</label>
            <input onChange={this.handleChange} value={getMember.publicEmail} type="email" className="form-control" id="publicEmail"/>
          </div>
          <div className="form-group">
            <label htmlFor="website">Your Website</label>
            <input onChange={this.handleChange} value={getMember.website} type="text" className="form-control" id="website"/>
          </div>
          <div className="form-group">
            <label htmlFor="linkedIn">LinkedIn</label>
            <input onChange={this.handleChange} value={getMember.linkedIn} type="text" className="form-control" id="linkedIn"/>
          </div>
          <div className="form-group">
            <label htmlFor="facebook">facebook</label>
            <input onChange={this.handleChange} value={getMember.facebook} type="text" className="form-control" id="facebook"/>
          </div>
          <div className="form-group">
            <label htmlFor="Twitter">Twitter</label>
            <input onChange={this.handleChange} value={getMember.twitter} type="text" className="form-control" id="twitter"/>
          </div>
          <br></br>
          <h3>Skills, Tags & Tools.</h3>
          <h6>map member tags here...</h6>
            
          <button type="submit" className="button submit btn btn-primary">Edit Profile</button>
        </form><br></br>
        <Link to="/" className='md-back-link'><button type="submit" className="btn btn-primary">Go Back</button></Link>
        <br></br><br></br>
        <button onClick={this.handleDelete} className="button submit btn btn-primary">Delete Profile</button>
      </div>
    );
  }
}