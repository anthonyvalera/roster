import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getTags } from './actions';

export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getTags());
  }

  render() {
    const { tagsInDb } = this.props;
    return (
      <div>
        <h1>Register for SD Roster</h1>
        <form>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" className="form-control" id="firstName" placeholder="Enter First Name" />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" className="form-control" id="lastName" placeholder="lastName" />
          </div>
          <div className="form-group">
            <label htmlFor="accountEmail">Account Email Address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" /><br />
            <small id="emailHelp" className="form-text text-muted">This email will not be shared with anyone.</small>
          </div><br />
          <div className="form-group">
            <label htmlFor="password">New Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" />
          </div>
          <div className="form-group">
            <label htmlFor="verifyPassword">Verify Password</label>
            <input type="password" className="form-control" id="verifyPassword" placeholder="Verify Password" />
          </div>

          <h2>Account Profile Information</h2>

          <div className="form-group">
            <label htmlFor="headline">Headline/Title</label>
            <input type="text" className="form-control" id="headline" placeholder="Enter your Headline or Title" />
          </div>
          <div className="form-group">
            <label htmlFor="shortBio">Short Bio</label>
            <input type="textarea" rows="4" cols="40" maxLength="500" className="form-control" id="shortBio" placeholder="Share a short bio" />
          </div>
          <div className="form-group">
            <label htmlFor="avatar">Avatar URL</label>
            <input type="text" className="form-control" id="avatar" placeholder="Link to your Avatar" />
          </div>
          <div className="form-group">
            <label htmlFor="publicEmail">Public Email address</label>
            <input type="email" className="form-control" id="publicEmail" placeholder="Publicly visibile email" />
          </div>
          <div className="form-group">
            <label htmlFor="website">Your Website</label>
            <input type="text" className="form-control" id="website" placeholder="Your Website" />
          </div>
          <div className="form-group">
            <label htmlFor="linkedIn">LinkedIn</label>
            <input type="text" className="form-control" id="linkedIn" placeholder="LinkedIn" />
          </div>
          <div className="form-group">
            <label htmlFor="facebook">facebook</label>
            <input type="text" className="form-control" id="facebook" placeholder="facebook" />
          </div>
          <div className="form-group">
            <label htmlFor="Twitter">Twitter</label>
            <input type="text" className="form-control" id="twitter" placeholder="Twitter" />
          </div>
          <br></br>
          <h3>Skills, Tags & Tools</h3>
          <p> Map tags here...</p>
          <div>
            <ul>
            {tagsInDb.map(tag => {
              <li key={'tag-' + tagsInDb.indexOf(tag)}>{tag}</li>;
            })}
            </ul>
          </div>
          <button type="submit" className="btn btn-primary">Register</button>
        </form><br></br>
        <Link to="/" className='md-back-link'><button type="submit" className="btn btn-primary">Go Back</button></Link>
      </div>
    );
  }
}