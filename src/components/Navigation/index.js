import { connect } from 'react-redux';
import Navigation from './Navigation';

const mapStoreToProps = (store) => {
  return {
    tags: store.home.tags,
    isLoggingIn: store.home.isLoggingIn
  };
};

export default connect(mapStoreToProps)(Navigation);