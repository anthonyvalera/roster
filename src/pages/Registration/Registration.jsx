import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getTags, addMember, addInput } from './actions';

export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getTags());
  }
// checkbox is not being handled correctly yet
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
    const { newMember, dispatch } = this.props;
    dispatch(addMember(newMember));
  }

  render() {
    const { newMember, tags } = this.props;
    return (
            <div>
        <h1>Register for SD Roster</h1>
        <form onSubmit={this.handleSubmit} name='addMember'>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input onChange={this.handleChange} value={newMember.firstName} type="text" className="form-control" id="firstName" placeholder="Enter First Name" />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input onChange={this.handleChange} value={newMember.lastName} type="text" className="form-control" id="lastName" placeholder="lastName" />
          </div>
          <div className="form-group">
            <label htmlFor="accountEmail">Account Email Address</label>
            <input onChange={this.handleChange} value={newMember.accountEmail} type="email" className="form-control" id="accountEmail" placeholder="Enter email" /><br />
            <small id="accountEmail" className="form-text text-muted">This email will not be shared with anyone.</small>
          </div><br />
          <div className="form-group">
            <label htmlFor="password">New Password</label>
            <input onChange={this.handleChange} value={newMember.password} type="password" className="form-control" id="password" placeholder="Password" />
          </div>
          <div className="form-group">
            <label htmlFor="verifyPassword">Verify Password</label>
            <input onChange={this.handleChange} type="password" value={newMember.verifyPassword} className="form-control" id="verifyPassword" placeholder="Verify Password" />
          </div>

          <h2>Account Profile Information</h2>

          <div className="form-group">
            <label htmlFor="headline">Headline/Title</label>
            <input onChange={this.handleChange} value={newMember.headline} type="text" className="form-control" id="headline" placeholder="Enter your Headline or Title" />
          </div>
          <div className="form-group">
            <label htmlFor="shortBio">Short Bio</label>
            <input onChange={this.handleChange} value={newMember.shortBio} type="textarea" rows="4" cols="40" maxLength="500" className="form-control" id="shortBio" placeholder="Share a short bio" />
          </div>
          <div className="form-group">
            <label htmlFor="avatar">Avatar URL</label>
            <input onChange={this.handleChange} value={newMember.avatar} type="text" className="form-control" id="avatar" placeholder="Link to your Avatar" />
          </div>
          <div className="form-group">
            <label htmlFor="publicEmail">Public Email address</label>
            <input onChange={this.handleChange} value={newMember.publicEmail} type="email" className="form-control" id="publicEmail" placeholder="Publicly visibile email" />
          </div>
          <div className="form-group">
            <label htmlFor="website">Your Website</label>
            <input onChange={this.handleChange} value={newMember.website} type="text" className="form-control" id='website' placeholder="Your Website" />
          </div>
          <div className="form-group">
            <label htmlFor="linkedIn">LinkedIn</label>
            <input onChange={this.handleChange} value={newMember.linkedIn} type="text" className="form-control" id="linkedIn" placeholder="LinkedIn" />
          </div>
          <div className="form-group">
            <label htmlFor="facebook">facebook</label>
            <input onChange={this.handleChange} value={newMember.facebook} type="text" className="form-control" id="facebook" placeholder="facebook" />
          </div>
          <div className="form-group">
            <label htmlFor="Twitter">Twitter</label>
            <input onChange={this.handleChange} value={newMember.name} type="text" className="form-control" id="twitter" placeholder="Twitter" />
          </div>
          <br></br>
          <h3>Skills, Tags & Tools</h3>
            {tags.map((tag, i) => (
             <li key={i}>
              <input onChange={this.handleChange} value={newMember.tag} type='checkbox'></input>
              <label>{tag.name}</label>
             </li>
            ))}
          <button type="submit" className="button submit btn btn-primary">Register</button>
        </form><br></br>
        <Link to="/" className='md-back-link'><button type="submit" className="btn btn-primary">Go Back</button></Link>
      </div>
    );
  }
}