import { connect } from 'react-redux';
import Registration from './Registration';

const mapStoreToProps = (store) => {
  return {
    tags: store.registration.tags
  };
};

export default connect(mapStoreToProps)(Registration);