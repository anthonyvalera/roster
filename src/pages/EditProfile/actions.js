import axios from 'axios';

export const getMember = (token, userId) => {
  return {
    type: 'GET_MEMBER',
<<<<<<< 56d3b81ddc47a4de906c15d6d49f935b66bd3b63
    payload: axios.get('/api/members/' + userId)
      .then(response => response.data)
=======
    payload: axios.get('/api/members/5c095d51fd334673e837e448')
      .then(response => {
        return response.data;
      })
>>>>>>> adding password update functionality
  };    
};

export const editInput = (name, value) => {
  return {
    type: 'EDIT_INPUT',
    payload: {
      [name]: value
    }
  };
};

export const editTag = (name, value) => {
  return {
    type: 'EDIT_TAG',
    payload: {
      name,
      value,
    }
  };
};

export const updatePassword = (oldPassword, newPassword) => {
  return {
    type: 'UPDATE_PASSWORD',
    payload: axios.post(`/api/members/change-password/${getMember.id}`, {
      oldPassword: oldPassword,
      newPassword: newPassword
    })
  };
};

export const editMember = ( getMember, token, userId ) => {
  return {
    type: 'EDIT_MEMBER',
    payload: axios.patch('/api/members/' + userId, {
      firstName: getMember.firstName,
      lastName: getMember.lastName,
      email: getMember.email,
      headline: getMember.headline,
      bio: getMember.bio,
      avatar: getMember.avatar,
      publicEmail: getMember.publicEmail,
      isHidden: getMember.isHidden,
      website: getMember.website,
      linkedIn: getMember.linkedIn,
      facebook: getMember.facebook,
      twitter: getMember.twitter,
      tagIds: getMember.tagIds
    })
    .then(response => response.data)
  };
};

export const showHideMember = ( getMember ) =>
  ({
    type: 'SHOWHIDE_MEMBER',
    payload: axios.patch(`/api/members/${getMember.id}`, {
      isHidden: !getMember.isHidden
    })
    .then(response => {
      return response.data.isHidden;
    })
  });
  
export const deleteMember = (getMember) =>
  ({
    type: 'DELETE_MEMBER',
    payload: axios.delete(`api/members/${getMember.id}`)
      // .then(response => {
      //   return response.data;
      // })
  });
