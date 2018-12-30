import React, { Component } from 'react';

export default class MemberCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

  render() {
    const { info: { avatar, name, headline, tags = null } } = this.props;
    return (
      <div className='member-card'>
        <figure className="img-wrap">
          <img
            src={avatar}
            title={`${name} | ${headline}`}
            alt={`Profile photo of ${name}`}
          />
        </figure>
        <section className="member-info">
          <h2>{name}</h2>
          <p>{headline}</p>
          {tags && <ul>
            {
              tags.map(tag => <li>{tag}</li>)
            }
          </ul>
          }
        </section>
      </div>
    );
  }
}