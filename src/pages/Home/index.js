import { connect } from 'react-redux';
import Home from './Home';

const mapStoreToProps = (store) => {
  return {
    members: store.home.members,
    tags: store.home.tags,
    selectedMember: store.home.selectedMember,
    toProfile: store.home.toProfile
  };
};

export default connect(mapStoreToProps)(Home);