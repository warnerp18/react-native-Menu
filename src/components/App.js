import React from 'react';

import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

export default class App extends React.Component{

  constructor(props){
    super(props);
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
    this.state={
      fishes: {},
      order: {},
    }
  }

  componentWillMount() {
     this.ref = base.syncState(`${this.props.params.storeId}/fishes`, {      context: this,
      state: 'fishes',
     })
  }

  componentWillUnmount() {
     this.removeBinding(this.ref);
  }

  addFish(fish) {
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

  addToOrder(key) {
    //copy of state
    const order = { ...this.state.order }
    //update or add the new number of fish ordered
    order[key] = order[key] + 1 || 1;
    //update state
    this.setState({
      order
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
              .map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />)
            }
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order}/>
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
      </div>
    )
  }
}
