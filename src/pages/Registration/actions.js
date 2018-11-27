import axios from 'axios';

// Actions
export function getTags() {
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
      .catch(err => {throw err}
      )
}

<<<<<<< ec7e8163c98ecc57f4263ccef3e25951fb34ff76
// payload: axios.get(`http://localhost:3000/api/tags?access_token=efq9KRUJHmDpqA4gcA7ejrpE8hx0nKvRoPAzLpL8JskIeZuc5vy2zmjv4ksdx9KN`)
>>>>>>> building tag mapping for registration page
=======
 
>>>>>>> in progress
