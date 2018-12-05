import { connect } from 'react-redux';
import Home from './Home';

const mapStoreToProps = (store) => {
  return {
    members: store.home.members,
    tags: store.home.tags
  };
};

export default connect(mapStoreToProps)(Home);