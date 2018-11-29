import { connect } from 'react-redux';
import EditProfile from './EditProfile';

const mapStoreToProps = (store) => {
  return {
    getMember: store.edit.member
    //editMember: store.edit.member
  };
};

export default connect(mapStoreToProps)(EditProfile);