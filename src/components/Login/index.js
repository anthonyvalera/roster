import { connect } from 'react-redux';
import Login from './Login';

const mapStoreToProps = (store) => {
  return {
    userId: store.edit.member.id,
    token: store.edit.member.token,
    email: store.edit.member.email,
    password: store.edit.member.verifyPassword
  };
};

export default connect(mapStoreToProps)(Login);
