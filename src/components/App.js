import React from 'react';

import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

export default class App extends React.Component{

  constructor(props){
    super(props);
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
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

  loadSamples() {
    console.log('load sample');
    this.setState({
      fishes: sampleFishes,
    });
  }

  render() {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagLine="Fresh Seafood Market"/>
          <ul className='list-of-fishes'>
            {
              Object
              .keys(this.state.fishes)
              .map(key => <Fish key={key} details={this.state.fishes[key]} />)
            }
          </ul>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
      </div>
    )
  }
}
