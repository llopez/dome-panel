import { connect } from 'react-redux';
import SensorItem from '../components/SensorItem';
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
)(SensorItem)
