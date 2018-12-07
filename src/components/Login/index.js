import { connect } from 'react-redux';
import Login from './Login';

const mapStoreToProps = (store) => {
  return {
    email: store.user.email,
    password: store.user.password,
    isLoggingIn: store.home.isLoggingIn,
    toProfile: store.home.toProfile
  };
};

export default connect(mapStoreToProps)(Login);
