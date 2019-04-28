import { connect } from 'react-redux';
import Item from '../components/Item';
import { removeAsync, updateItem } from '../actions/items';

const mapStateToProps = (state, props) => {
  return {
  }
}

const mapDispatchToProps =  {
  onRemove: removeAsync,
  onUpdate: updateItem,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item)
