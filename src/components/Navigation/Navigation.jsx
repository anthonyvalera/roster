import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from '../../components/Login';
import { getTags, loggingIn } from '../../pages/Home/actions';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getTags());
  }

  handleLogin() {
    const { dispatch } = this.props;
    const { isLoggingIn } = this.props;
    dispatch(loggingIn(!isLoggingIn));
  }

  render() {
    const { tags, isLoggingIn } = this.props;
    return (
      <div id='nav-content'>
        <div id='main-nav-content'>
          <h1>sandiegoJS</h1>
          <p>We are a 4,000+ member strong community full of some amazing people who love JavaScript.</p>
          <Link to='/registration'><button>Add Your Profile</button></Link>
          <button onClick={this.handleLogin}>Edit Your Profile</button>
          {
            isLoggingIn && <Login />
          }
        </div>
        <div id='nav-search'>
          <h3>Search by:</h3>
          {tags.map(tag => (
            <button key={'tag-' + tags.indexOf(tag)}>{tag.name}</button>
          ))}
        </div>
      </div>
    );
  }
}