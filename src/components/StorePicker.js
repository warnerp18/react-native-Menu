import React from 'react';
import { render } from 'react-dom';

import { getFunName } from '../helpers';

export default class StorePicker extends React.Component {
  goToStore(e) {
    e.preventDefault();
    console.log('url changed');
    //grabt text from box
    const storeId = this.storeInput.value;
    this.context.router.transitionTo(`/store/${storeId}`);
    //transition to /store/:storeid
  }

  render() {
    return (
      <form className='store-selector' onSubmit={this.goToStore.bind(this)}>
        <h2>Please Enter A Store</h2>
        <input type='text' required placeholder='Store Name' defaultValue={getFunName()} ref={(input) => {this.storeInput = input}} />
        <button type='submit'>Visit Store</button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}
