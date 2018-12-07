import { connect } from 'react-redux';
import Navigation from './Navigation';

const mapStoreToProps = (store) => {
  return {
    token: store.user.token,
    tags: store.home.tags,
    isLoggingIn: store.home.isLoggingIn,
    toProfile: store.home.toProfile
  };
};

export default connect(mapStoreToProps)(Navigation);