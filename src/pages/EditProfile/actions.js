import axios from 'axios';

// Actions
export function getMember() {
  return {
    type: 'GET_MEMBER',
    payload: axios.get('/api/members/5bfee551eacf0737a9142683')
      .then(response => {
        return response.data;
      })
  };    
}

export const addInput = (name, value) => {
  return {
    type: 'EDIT_INPUT',
    payload: {
      [name]: value
    }
  };
};

export const editMember = ( getMember ) =>
  ({
    type: 'ADD_MEMBER',
    payload: axios.patch('/api/members/5bfee551eacf0737a9142683', {
      firstName: getMember.firstName,
      lastName: getMember.lastName,
      email: getMember.email,
      verifyPassword: getMember.verifyPassword,
      headline: getMember.headline,
      bio: getMember.bio,
      avatar: getMember.avatar,
      publicEmail: getMember.publicEmail,
      website: getMember.website,
      linkedIn: getMember.linkedIn,
      facebook: getMember.facebook,
      twitter: getMember.twitter
    })
  });

  //works when hardcoding the id.  Need to adjust this $id variable
export function deleteMember(id) {
    console.log
  return {
    type: 'DELETE_MEMBER',
    payload: axios.delete(`api/members/${id}`)
      .then(response => {
        return response.data;
      })
  };


// export const deleteMember = (id) =>
//   ({
//     type: 'DELETE_MEMBER',
//     payload: axios.delete(`api/members/${id}`)
//       .then(response => {
//         return response.data;
//       })
//   });
