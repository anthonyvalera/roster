import React, { Component } from 'react';
import { updateInput, postLogin } from './actions';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleInput = this.handleInput.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }

  handleInput(event) {
    const { dispatch } = this.props;
    const { id, value } = event.target;
    dispatch( updateInput( id, value ) );
  }

  submitLogin(event) {
    event.preventDefault();
    const { dispatch, email, password, toProfile, isLoggingIn } = this.props;
    dispatch(postLogin({ email, password }, dispatch, isLoggingIn, toProfile));
  }

  render() {

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={ this.submitLogin }>
          <label htmlFor='email'>Account Email:</label>
          <input type='email' id='email' autoComplete='email' onChange={this.handleInput} /><br />
          <label htmlFor='password'>Password:</label>
          <input type='password' autoComplete='verifyPassword' id='password' onChange={this.handleInput} />
         <div>
           <p>
            <button type='submit' id='submit'>Login</button>
           </p>
         </div>            
        </form>
      </div>
    );
  }
}
