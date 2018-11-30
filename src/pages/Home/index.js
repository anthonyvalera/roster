import { connect } from 'react-redux';
import Home from './Home';

const mapStoreToProps = (store) => {
  return {
    members: store.home.members
  };
};

export default connect(mapStoreToProps)(Home);