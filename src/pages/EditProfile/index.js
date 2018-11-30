import { connect } from 'react-redux';
import EditProfile from './EditProfile';

const mapStoreToProps = (store) => {
  return {
    tags: store.registration.tags,
    tagIds: store.edit.member.tagIds,
    getMember: store.edit.member
  };
};

export default connect(mapStoreToProps)(EditProfile);