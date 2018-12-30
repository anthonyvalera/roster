import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getTags, addMember, addInput, addTag } from './actions';
import { Wizard, Steps, Step } from 'react-albus';

export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.state        = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getTags());
  }

  handleChange(event) {
    const { dispatch } = this.props;
    const { name, value, type, checked } = event.target;
    if (type === 'checkbox') {
      dispatch(addTag(value, checked));
    } else {
      dispatch(addInput(name, value));
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const { newMember, dispatch } = this.props;
    if (newMember.avatar.includes('http')) {
      dispatch(addMember(newMember));
    } else {
      alert('Must enter valid image url.');
    }
  }

  render() {
    const { newMember, tags } = this.props;
    return (
      <div className="container">
        <div className="row">
          <h1>Register for SD Roster</h1>
          <form className="col s12" onSubmit={this.handleSubmit} href='/' name='addMember'>
          <Wizard>
            <Steps>
              <Step
                id="registerInfo"
                render={({ next }) => (
                  <div>
                    <div className="row">
                      <div className="input-field col s6">
                        <input onChange={this.handleChange} value={newMember.firstName} type='text' className='form-control' name='firstName' placeholder='Enter First Name'/>
                        <label className="active" htmlFor="firstName">First Name</label>
                      </div>
                      <div className="input-field col s6">
                        <input onChange={this.handleChange} value={newMember.lastName} type='text' className='validate' name='lastName' placeholder='Enter Last Name'/>
                        <label className="active" htmlFor="lastName">Last Name</label>
                      </div>
                    </div>

                    <div className="row">
                      <div className="input-field col s12">
                        <input id="password" onChange={this.handleChange} value={newMember.password} type='password' autoComplete='new-password' className='validate' name='password' placeholder='Password' />
                        <label className="active" htmlFor="password">Password</label>
                      </div>
                    </div>
                    
                    <div className="row">
                      <div className="input-field col s12">
                        <input id="verifyPassword" onChange={this.handleChange} type='password' value={newMember.verifyPassword} autoComplete='new-password' className='validate' name='verifyPassword' placeholder='Verify Password' />
                        <label className="active" htmlFor='verifyPassword'>Password</label>
                      </div>
                    </div>

                    <div className="row">
                      <div className="input-field col s12">
                        <input id="email" onChange={this.handleChange} value={newMember.accountEmail} type='email' className='validate' name='accountEmail' placeholder='Enter email' />
                        <label className="active" htmlFor="email">Email</label>
                        <small name='accountEmail' className='form-text grey-text lighten-5'>This email will not be shared with anyone.</small>
                      </div>
                    </div>
                    <div className="row center-align">
                      <button onClick={next} className="red darken-1 btn">Next</button>
                    </div>
                  </div>
                )}
              />
              <Step
                id="bioInfo"
                render={({ next, previous }) => (
                  <div>

                    <div className="row">
                      <div className="input-field col s6">
                        <input onChange={this.handleChange} value={newMember.headline} type='text' className='validate' name='headline' placeholder='Enter your Headline or Title' />
                        <label className="active" htmlFor='headline'>Headline/Title</label>
                      </div>
                      <div className="input-field col s6">
                        <input onChange={this.handleChange} value={newMember.linkedIn} type='url' className='validate' name='linkedIn' placeholder='LinkedIn' />
                        <label className="active" htmlFor='linkedIn'>LinkedIn</label>
                      </div>
                    </div>

                    <div className="row">
                      <div className="input-field col s6">
                        <input onChange={this.handleChange} value={newMember.publicEmail} type='email' className='validate' name='publicEmail' placeholder='Publicly visibile email' />
                        <label className="active" htmlFor='publicEmail'>Public Email address</label>
                      </div>
                      <div className="input-field col s6">
                        <input onChange={this.handleChange} value={newMember.github} type='url' className='validate' name='github' placeholder='Github' />
                        <label className="active" htmlFor='website'>Github</label>
                      </div>
                    </div>

                    <div className="row">
                      <div className="input-field col s6">
                        <input onChange={this.handleChange} value={newMember.avatar} type='url' className='validate' name='avatar' placeholder='Link to your Avatar' />
                        <label className="active" htmlFor='avatar'>Avatar URL</label>
                      </div>
                      <div className="input-field col s6">
                        <input onChange={this.handleChange} value={newMember.facebook} type='url' className='validate' name='facebook' placeholder='Facebook' />
                        <label className="active" htmlFor='facebook'>Facebook</label>
                      </div>
                    </div>

                    <div className="row">
                      <div className="input-field col s6">
                        <input id="phone" onChange={this.handleChange} value={newMember.phone} type='text' className='validate' name='phone' placeholder='(XXX)XXX-XXXX' />
                        <label className="active" htmlFor='Phone'>Phone</label>
                      </div>
                      <div className="input-field col s6">
                        <input onChange={this.handleChange} value={newMember.instagram} type='url' className='validate' name='instagram' placeholder='Instagram' />
                        <label className="active" htmlFor='website'>Instagram</label>
                      </div>
                    </div>

                    <div className="row">
                      <div className="input-field col s6">
                        <input onChange={this.handleChange} value={newMember.website} type='url' className='validate' name='website' placeholder='Your Website' />
                        <label className="active" htmlFor='website'>Your Website</label>
                      </div>
                      <div className="input-field col s6">
                        <input onChange={this.handleChange} value={newMember.twitter} type='url' className='validate' name='twitter' placeholder='Twitter' />
                        <label className="active" htmlFor='Twitter'>Twitter</label>
                      </div>
                    </div>

                    <div className="row">
                      <div className="input-field col s12">
                        <textarea id="shortBio" name='shortBio' className="materialize-textarea" type="textarea" onChange={this.handleChange} value={newMember.shortBio}></textarea>
                        <label className="active" htmlFor="shortBio">Short Bio</label>
                      </div>
                    </div>

                    <div className="row center-align">
                      <button onClick={previous} className="red darken-1 btn">Previous</button>
                      <button type='submit' className='red darken-1 btn'>Register</button>
                      {/* <button onClick={next} className="red darken-1 btn">Next</button> */}
                    </div>
                  </div>
                )}
              />
              {/* <Step
                id="tags"
                render={({ previous }) => (
                  <div>
                    <ul>
                      {tags.map((tag, i) => (
                        <li key={i}>
                          <input onChange={this.handleChange} name={newMember} value={tag.id} type='checkbox' ></input>
                          <label>{tag.name}</label>
                        </li>
                      ))}
                    </ul>
                    <div className="row center-align">
                      <button onClick={previous} className="red darken-1 btn">Previous</button>
                      <button type='submit' className='red darken-1 btn'>Register</button>
                    </div>
                  </div>
                )}/> */}
            </Steps>
          </Wizard>
          </form>

        </div>

        <div className="row">
          <Link to='/' className='md-back-link'><button type='submit' className='btn blue-grey darken-4'>Main Page</button></Link>
        </div>
      </div>
    );
  }
}
