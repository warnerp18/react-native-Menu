import React from 'react';

import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

export default class App extends React.Component{

  constructor(props){
    super(props);
    this.addFish = this.addFish.bind(this);
    this.state={
      fishes: {},
      order: {},
    }
  }

  addFish(fish){
    //update state
      const fishes = {...this.state.fishes}
      const timeStamp = Date.now();
      fishes[`fish-${timeStamp}`] = fish;
    //set state
      this.setState({
        fishes,
      })
  }

  render() {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagLine="Fresh Seafood Market"/>
        </div>
        <Order />
        <Inventory addFish={this.addFish}/>
      </div>
    )
  }
}
