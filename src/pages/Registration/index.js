import { connect } from 'react-redux';
import Registration from './Registration';

const mapStoreToProps = (store) => {
  return {
    tags: store.registration.tags,
    newMember: store.registration.member
  };
};

export default connect(mapStoreToProps)(Registration);