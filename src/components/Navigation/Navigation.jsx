import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { tags } = this.props;
    return (
      <div>
        <h1>SDJS Roster</h1>
        <h2>A gazetteer of SD Tech members</h2>
        <Link to='/registration'><button>Add Your Profile</button></Link>
        <button>Edit Your Profile</button>
        <h2>Tags:</h2>
        {tags.map(tag => (
          <button key={'tag-' + tags.indexOf(tag)}>{tag.name}</button>
        ))}
      </div>
    );
  }
}