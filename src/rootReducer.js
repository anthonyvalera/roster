import { combineReducers } from 'redux';
import EditProfile from './pages/EditProfile/reducer';
import Home from './pages/Home/reducer';
import Registration from './pages/Registration/reducer';

export default combineReducers({
  edit: EditProfile,
  home: Home,
  registration: Registration
});