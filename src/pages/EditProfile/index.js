import { connect } from 'react-redux';
import EditProfile from './EditProfile';

const mapStoreToProps = (store) => {
  return {
    userId: store.user.userId,
    token: store.user.token,
    tags: store.registration.tags,
    tagIds: store.edit.member.tagIds,
    getMember: store.edit.member,
    isHidden: store.edit.member.isHidden,
    toProfile: store.home.toProfile
  };
};

export default connect(mapStoreToProps)(EditProfile);
