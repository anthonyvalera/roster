import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import { getMember, editMember, deleteMember, updatePassword, editInput, editTag, showHideMember } from './actions';
import { getTags } from '../Registration/actions';
import { goToProfile } from '../Home/actions';

export default class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleShowHide = this.handleShowHide.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  componentDidMount() {
    const { dispatch, token, userId, toProfile } = this.props;
    dispatch(getMember(token, userId));
    dispatch(getTags());
    dispatch(goToProfile(!toProfile));
  }

  handleChange(event) {
    const { dispatch } = this.props;
    const { name, value, type, checked } = event.target;
    if (type === 'checkbox') {
      dispatch(editTag(name, checked));
    } else {
      dispatch(editInput(name, value));
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const { dispatch, getMember, token, userId } = this.props;
    dispatch(editMember(getMember, token, userId));
  }

  handleDelete() {
    const { getMember, userId, token, dispatch } = this.props;
    dispatch(deleteMember(getMember, userId, token));
  }

  handleShowHide() {
    const { getMember, userId, token, dispatch } = this.props;
    dispatch(showHideMember(getMember, userId, token));
  }

  handlePassword(event) {
    event.preventDefault();
    const {oldPassword, newPassword, token, userId, dispatch } = this.props;
    dispatch(updatePassword(oldPassword, newPassword, token, userId));
  }

  render() {
    if (!this.props.token) {
      return <Redirect push to='/' />;
    }
    const { getMember, tags, tagIds, isHidden } = this.props;
    return (
      <div>
        <h1>Edit Profile</h1>
        <form onSubmit={this.handleSubmit} name='editMember'>
          <div className='form-group'>
            <label htmlFor='firstName'>First Name</label>
            <input onChange={this.handleChange} value={getMember.firstName} type='text' className='form-control' name='firstName' />
          </div>
          <div className='form-group'>
            <label htmlFor='lastName'>Last Name</label>
            <input onChange={this.handleChange} value={getMember.lastName} type='text' className='form-control' name='lastName' />
          </div>
          <div className='form-group'>
            <label htmlFor='accountEmail'>Account Email Address</label>
            <input onChange={this.handleChange} value={getMember.email} type='email' className='form-control' name='email' /><br />
            <small name='accountEmail' className='form-text text-muted'>This email will not be shared with anyone.</small>
          </div><br />
          <h2>Account Profile Information</h2>
          <div className='form-group'>
            <label htmlFor='headline'>Headline/Title</label>
            <input onChange={this.handleChange} value={getMember.headline} type='text' className='form-control' name='headline' />
          </div>
          <div className='form-group'>
            <label htmlFor='shortBio'>Short Bio</label>
            <input onChange={this.handleChange} value={getMember.bio} type='textarea' rows='4' cols='40' maxLength='500' className='form-control' name='bio' />
          </div>
          <div className='form-group'>
            <label htmlFor='avatar'>Avatar URL</label>
            <input onChange={this.handleChange} value={getMember.avatar} type='text' className='form-control' name='avatar' />
          </div>
          <div className='form-group'>
            <label htmlFor='publicEmail'>Public Email address</label>
            <input onChange={this.handleChange} value={getMember.publicEmail} type='email' className='form-control' name='publicEmail' />
          </div>
          <div className='form-group'>
            <label htmlFor='website'>Your Website</label>
            <input onChange={this.handleChange} value={getMember.website} type='text' className='form-control' name='website' />
          </div>
          <div className='form-group'>
            <label htmlFor='linkedIn'>LinkedIn</label>
            <input onChange={this.handleChange} value={getMember.linkedIn} type='text' className='form-control' name='linkedIn' />
          </div>
          <div className='form-group'>
            <label htmlFor='facebook'>facebook</label>
            <input onChange={this.handleChange} value={getMember.facebook} type='text' className='form-control' name='facebook' />
          </div>
          <div className='form-group'>
            <label htmlFor='Twitter'>Twitter</label>
            <input onChange={this.handleChange} value={getMember.twitter} type='text' className='form-control' name='twitter' />
          </div>
          <br />
          <h3>Skills, Tags & Tools.</h3>
          <ul>
            {tags.map((tag, i) => (
              <li key={i}>
                {tagIds.includes(tag.id)
                  ? <input onChange={this.handleChange} name={tag.id} type='checkbox' checked={true} />
                  : <input onChange={this.handleChange} name={tag.id} type='checkbox' checked={false} />
                }
                <label>{tag.name}</label>
              </li>
            ))}
          </ul>
          <button type='submit' className='button submit btn btn-primary'>Update Profile & Exit</button>
        </form><br />
        <form onSubmit={this.handlePassword} name='changePassword'>
          <div className='form-group'>
            <label htmlFor='oldPassword'>Old Password</label>
            <input onChange={this.handleChange} value={getMember.oldPassword} type='password' className='form-control' name='oldPassword' />
          </div>
          <div className='form-group'>
            <label htmlFor='newPassword'>New Password</label>
            <input onChange={this.handleChange} value={getMember.newPassword} type='password' className='form-control' name='newPassword' />
          </div>
          <div className='form-group'>
            <label htmlFor='confirmPassword'>Confirm New Password</label>
            <input onChange={this.handleChange} value={getMember.confirmPassword} type='password' className='form-control' name='confirmPassword' />
          </div>
          <button onClick={this.handlePassword} className='button submit btn btn-primary'>Update Password</button>

        </form><br />
        <button onClick={this.handleShowHide} className='button submit btn btn-primary'>Show/Hide Profile</button>
        <div>
          Your profile is {isHidden === true ? 'Hidden' : 'Visible'}
        </div>
        <br />
        <Link to='/' className='md-back-link'><button type='submit' className='btn btn-primary'>Main Page</button></Link>
        <br /><br />
        <button onClick={this.handleDelete} className='button submit btn btn-primary'>Delete Profile</button>
      </div>
    );
  }
}
