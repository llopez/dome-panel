import { connect } from 'react-redux';
import Item from '../components/Item';
import { removeAsync } from '../actions/items';

const mapStateToProps = (state, props) => {
  return {
  }
}

const mapDispatchToProps =  {
  onRemove: removeAsync,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item)
