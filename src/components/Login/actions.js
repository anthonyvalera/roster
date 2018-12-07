import axios from 'axios';
import { goToProfile, loggingIn } from '../../pages/Home/actions';

export const postLogin = (userData, dispatch, isLoggingIn, toProfile) => {
  return {
    type: 'POST_LOGIN',
    payload: axios.post('api/members/login', userData)
      .then(response => {
        return response.data;
      })
      .then(() => {
        dispatch(loggingIn(!isLoggingIn));
        dispatch(goToProfile(!toProfile));
      })
  };
};
export const updateInput = (id, value) => {
  return {
    type: 'UPDATE_INPUT',
    payload: {
      [id]: value
    }
  };
};
