import { connect } from 'react-redux';
import Login from './Login';

const mapStoreToProps = (store) => {
  return {
    token: store.user.token,
    email: store.user.email,
    password: store.user.password
  };
};

export default connect(mapStoreToProps)(Login);
