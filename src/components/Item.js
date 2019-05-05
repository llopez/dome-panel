import React from 'react';
import SwitchItem from './items/switch';
import TempItem from './items/temp';
import AirItem from './items/air';
import HumItem from './items/hum';
import DimmerItem from './items/dimmer';

export default (props) => {
  let item;

  switch (props.type) {
    case 'temp':
      item = <TempItem {...props} />
      break;
    case 'air':
      item = <AirItem {...props} />
      break;
    case 'hum':
      item = <HumItem {...props} />
      break;
    case 'dimm':
      item = <DimmerItem {...props} />
      break;
    default:
      item = <SwitchItem {...props} />
  }

  return item;
}
