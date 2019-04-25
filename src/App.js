import React from 'react';
import List from './components/List';

const items = [
  {id: 1, name: 'Item 1', state: 'off'},
  {id: 2, name: 'Item 2', state: 'off'},
  {id: 3, name: 'Item 3', state: 'off'},
];

function App() {
  return (
    <div className="App">
      <List items={items} />
    </div>
  );
}

export default App;
