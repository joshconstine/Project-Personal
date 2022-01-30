import React from 'react';
import ItemList from './ItemList';

// We'll render these sample items for now. Later, we'll instead fetch the list
// of pets from the server! We won't need samplePets after that.
import sampleItems from '../itemdata';

class Root extends React.Component {
  render() {
    return (
      <>
            <h1>shithead Store</h1>
        <ItemList items={sampleItems} />
      </>
    );
  }
}

export default Root;