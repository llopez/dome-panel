import { connect } from 'react-redux';
import Content from '../components/layouts/Content';
import changePage from '../actions/content';

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    index: state.page
  }
}

const mapDispatchToProps =  {
  onSwipe: changePage,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content)
