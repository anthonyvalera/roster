import axios from 'axios';
import { goToProfile, loggingIn } from '../../pages/Home/actions';

export const postLogin = (userData, dispatch, isLoggingIn, toProfile) => {
  return {
    type: 'POST_LOGIN',
    payload: axios.post('api/members/login', userData)
      .then(response => {
        dispatch(goToProfile(!toProfile));
        dispatch(loggingIn(!isLoggingIn));
        return response.data;
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
