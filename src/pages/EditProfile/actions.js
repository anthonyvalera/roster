import axios from 'axios';

export const getMember = (token, userId) => {
  console.log('backend userId: ', userId);
  return {
    type: 'GET_MEMBER',
    payload: axios.get(`/api/members/${userId}`, { headers: { 'Authorization': token } })
      .then(response => response.data)
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
      value
    }
  };
};

export const updatePassword = (oldPassword, newPassword, token, userId) => {
  return {
    type: 'UPDATE_PASSWORD',
    payload: axios.post(`/api/members/change-password/${userId}`, {
      oldPassword: oldPassword,
      newPassword: newPassword
    }, { headers: { 'Authorization': token } })
  };
};

export const editMember = ( getMember, token, userId ) => {
  return {
    type: 'EDIT_MEMBER',
    payload: axios.patch(`/api/members/${userId}`, {
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
    }, { headers: { 'Authorization': token } })
    .then(response => response.data)
  };
};

export const showHideMember = ( getMember, token ) =>
  ({
    type: 'SHOWHIDE_MEMBER',
    payload: axios.patch(`/api/members/${getMember.id}`, {
      isHidden: !getMember.isHidden
    }, { headers: { 'Authorization': token } })
    .then(response => {
      return response.data.isHidden;
    })
  });
  
export const deleteMember = (getMember, token) =>
  ({
    type: 'DELETE_MEMBER',
    payload: axios.delete(`api/members/${getMember.id}`, { headers: { 'Authorization': token } })
      // .then(response => {
      //   return response.data;
      // })
  });
