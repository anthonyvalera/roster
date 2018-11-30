import { connect } from 'react-redux';
import Navigation from './Navigation';

const mapStoreToProps = (store) => {
  return {
    tags: store.home.tags
  };
};

export default connect(mapStoreToProps)(Navigation);