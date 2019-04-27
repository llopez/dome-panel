import { connect } from 'react-redux';
import Item from '../components/Item';
import { removeItem } from '../actions/items';

const mapStateToProps = (state, props) => {
  return {
  }
}

const mapDispatchToProps =  {
  onRemove: removeItem,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item)
