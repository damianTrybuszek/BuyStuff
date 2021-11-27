import './App.css';
import { Component } from 'react';
import Header from './Header';
import InventoryItem from './InventoryItem';

class App extends Component {

  constructor(props) {
    super(props);
  this.state = {InventoryItem: 2, Header:1}

  }

  render(){
  return (
    <div>
    <Header title="BuyStuff"/>
    <InventoryItem name="Shoe" price="5"/>
    <InventoryItem name="Sock" price="3"/>
    
    </div>
  );
}
}

export default App;
