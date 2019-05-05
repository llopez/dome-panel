import { connect } from 'react-redux';
import Footer from '../components/layouts/Footer';
import changePage from '../actions/content';
const mapStateToProps = (state /*, ownProps*/) => {
  return {
    index: state.page
  }
}

const mapDispatchToProps =  {
  onTabSelect: changePage,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)
