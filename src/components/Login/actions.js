import axios from 'axios';

export const postLogin = (userData) => {
  return {
    type: 'POST_LOGIN',
    payload: axios.post('api/members/login', userData)
      .then(response => response.data)
  };
};
export const updateEmail = (value) => {
  return {
    type: 'UPDATE_EMAIL',
    payload: value
  };
};
export const updatePassword = (value) => {
  return {
    type: 'UPDATE_PASSWORD',
    payload: value
  };
};
