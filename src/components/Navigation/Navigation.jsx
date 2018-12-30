import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from '../../components/Login';
import { getTags, goToProfile, loggingIn } from '../../pages/Home/actions';

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
    const { isLoggingIn, toProfile, token } = this.props;
    if (token) {
      dispatch(goToProfile(!toProfile));
    } else {
      dispatch(loggingIn(!isLoggingIn));
    }
  }

  render() {
    const { tags, isLoggingIn } = this.props;
    return (
      <div className='navigation'>
        <div className='header'>
          <h1 style={{ display: 'none' }}>San Diego JS Roster</h1>
          <figure className="logo">
            <img
            src="/SDJS-Logo.png"
            alt="San Diego with a sun over JS" />
            <figcaption>SDJS Logo</figcaption>
          </figure>
          <p>We are a 4,000+ member strong community full of some amazing people who love JavaScript.</p>
          <Link to='/registration'><button className="btn btn-link">Add Your Profile</button></Link>
          <button onClick={this.handleLogin} className="btn btn-link">Edit Your Profile</button>
          {
            isLoggingIn && <Login />
          }
        </div>
        <div className='search'>
          <h3>Search by:</h3>
          {tags.map(tag => (
            <button key={'tag-' + tags.indexOf(tag)}>{tag.name}</button>
          ))}
        </div>
      </div>
    );
  }
}