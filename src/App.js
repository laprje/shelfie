import React, { Component } from 'react';
import './App.css'
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import axios from 'axios';


class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: [],
      currentProduct: {}
    }

    // this.createProduct = this.createProduct.bind(this);
    this.editSelect = this.editSelect.bind(this);
  }

  componentDidMount() {
    axios
    .get('/api/inventory')
    .then(res => {
      this.setState({
        inventory: res.data
      })
    })
  }

  getUpdatedInventory() {
    axios
    .get('/api/inventory')
    .then(res => [
      this.setState({
        inventory: res.data
      })
    ])
  }

  editSelect(product) {
    this.setState({
      currentProduct: product
    })
  }



  render() {
    console.log(this.state.inventory)
    return (
      <div>
        <Header />
        <Form getUpdatedInventory = {() => this.getUpdatedInventory()} />
        <Dashboard editSelect={this.editSelect()} currentProduct={this.currentProduct} inventory={this.state.inventory} getUpdatedInventory = {() => this.getUpdatedInventory()}/>
      </div>
    )
  }
}


export default App;

//so far, you've wrote the method for setting state to the selected product.
// But, you havent' done much with it in the Form file.
