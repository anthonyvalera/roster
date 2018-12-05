import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import { updateEmail, updatePassword, postLogin } from './actions';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleEmail    = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.submitLogin    = this.submitLogin.bind(this);
  }

  handleEmail(e) {
    const { dispatch } = this.props;
    dispatch( updateEmail( e.target.value ) );
  }

  handlePassword(e) {
    const { dispatch } = this.props;
    dispatch( updatePassword( e.target.value ) );
  }

  submitLogin(e) {
    e.preventDefault();
    const { dispatch, email, password } = this.props;
    dispatch(postLogin({ email, password }));
  }


  render() {

    if (this.props.token) {
      console.log('token = ' , this.props.token);
      return <Redirect push to='/' />;
    }

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={ this.submitLogin }>
          <label htmlFor="email">Account Email:</label>
          <input type="email" id="email" autoComplete="email" onChange={this.handleEmail} /><br />
          <label htmlFor="password">Password:</label>
          <input type="password" autoComplete="verifyPassword" id="password" onChange={this.handlePassword} />
         <div>
           <p>
            <button type="submit" id="submit">Login</button>
           </p>
         </div>            
        </form>
        <div>
          <p>
            <Link to='/' className='md-back-link'><button type='submit' className='btn btn-primary'>Main Page</button></Link>
          </p>
        </div>
      </div>
    );
  }
}
