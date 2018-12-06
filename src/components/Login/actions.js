import axios from 'axios';

export const postLogin = (userData) => {
  return {
    type: 'POST_LOGIN',
    payload: axios.post('api/members/login', userData)
      .then(response => response.data)
  };
};
export const updateInput = (id, value) => {
  if (id === 'email') {
    return {
      type: 'UPDATE_EMAIL',
      payload: value
    };
  } else {
    return {
      type: 'UPDATE_PASSWORD',
      payload: value
    };
  }
};
