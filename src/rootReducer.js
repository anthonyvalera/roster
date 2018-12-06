import { combineReducers } from 'redux';
import editProfileReducer from './pages/EditProfile/reducer';
import homeReducer from './pages/Home/reducer';
import registrationReducer from './pages/Registration/reducer';
import userReducer from './userReducer';

export default combineReducers({
  edit: editProfileReducer,
  home: homeReducer,
  registration: registrationReducer,
  user: userReducer
});