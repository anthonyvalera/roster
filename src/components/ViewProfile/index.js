import { connect } from 'react-redux';
import ViewProfile from './ViewProfile';

const mapStoreToProps = (store) => {
  return {
    member: store.home.selectedMember,
    tags: store.home.tags
  };
};

export default connect(mapStoreToProps)(ViewProfile);