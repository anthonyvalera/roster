import axios from 'axios';

// Actions
export function getMember() {
  return {
    type: 'GET_MEMBER',
    payload: axios.get('/api/members/5bfee052b76f2130520d5a92')
      .then(response => {
        return response.data;
      })
  };    
}

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

export const editMember = ( getMember ) =>
  ({
    type: 'EDIT_MEMBER',
    payload: axios.patch('/api/members/5bfee052b76f2130520d5a92', {
      firstName: getMember.firstName,
      lastName: getMember.lastName,
      email: getMember.email,
      verifyPassword: getMember.verifyPassword,
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
    .then(response => {
      return response.data;
    })
  });

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
  
export function deleteMember(id) {
  return {
    type: 'DELETE_MEMBER',
    payload: axios.delete(`api/members/${id}`)
      .then(response => {
        return response.data;
      })
  };
}
/*
export const deleteMember = (id) =>
  ({
    type: 'DELETE_MEMBER',
    payload: axios.delete(`api/members/${id}`)
      .then(response => {
        return response.data;
      })
  });
*/