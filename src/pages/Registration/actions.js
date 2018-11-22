import axios from 'axios';

export const getTags = () => {
  return {
<<<<<<< 464cdca7fa76b6d474b6241070b662f9c1e32c19
    type: 'GET_TAGS',
    payload: axios.get('/api/tags')
      .then(response => {
        return response.data;
      })
  };    
}

export const addInput = (name, value) => {
  return {
    type: 'ADD_INPUT',
    payload: {
      [name]: value
    }
  };
};

export const addTag = (name, value) => {
  return {
    type: 'ADD_TAG',
    payload: {
      name,
      value
    }
  };
};

export const addMember = ( newMember ) =>
  ({
    type: 'ADD_MEMBER',
    payload: axios.post('/api/members', {
      firstName: newMember.firstName,
      lastName: newMember.lastName,
      email: newMember.accountEmail,
      password: newMember.password,
      verifyPassword: newMember.verifyPassword,
      headline: newMember.headline,
      bio: newMember.shortBio,
      avatar: newMember.avatar,
      publicEmail: newMember.publicEmail,
      website: newMember.website,
      linkedIn: newMember.linkedIn,
      facebook: newMember.facebook,
      twitter: newMember.twitter,
      tagIds: newMember.tagIds
    })
  });
=======
    type: 'GET_CARDS_FOR_GAME',
    payload: axios.get('/api/tags')
      .then(({ data }) => data)
      .catch(err => console.log(err))
  }
}

// payload: axios.get(`http://localhost:3000/api/tags?access_token=efq9KRUJHmDpqA4gcA7ejrpE8hx0nKvRoPAzLpL8JskIeZuc5vy2zmjv4ksdx9KN`)
>>>>>>> building tag mapping for registration page
