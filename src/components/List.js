import React from 'react';
import { connect } from 'react-redux';
import Item from './Item';

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    items: state
  }
}

const List = (props) => (
  <ul>
    {
      props.items.map(x => <Item key={x.id} name={x.name} state={x.state}/>)
    }
  </ul>
);

export default connect(
  mapStateToProps,
  {}
)(List)
