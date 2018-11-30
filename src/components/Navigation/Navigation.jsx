import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getTags } from '../../pages/Home/actions';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getTags());
  }

  render() {
    const { tags } = this.props;
    return (
      <div id='nav-content'>
        <div id='main-nav-content'>
          <h1>sandiegoJS</h1>
          <p>We are a 4,000+ member strong community full of some amazing people who love JavaScript.</p>
          <Link to='/registration'><button>Add Your Profile</button></Link>
          <button>Edit Your Profile</button>
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