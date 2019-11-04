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
      whichProduct: this.productObj
    }

    // this.createProduct = this.createProduct.bind(this);
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

  getProductForEdit(productObj) {
    this.setState({
      product_name: productObj.product_name,
      price: productObj.price,
      image_url: productObj.image_url
    })
  }



  render() {
    console.log(this.state.inventory)
    return (
      <div>
        <Header />
        <Form getUpdatedInventory = {() => this.getUpdatedInventory()} />
        <Dashboard getProductForEdit = {(productObj) => this.getProductForEdit(productObj)}whichProduct={this.state.whichProduct} inventory={this.state.inventory} getUpdatedInventory = {() => this.getUpdatedInventory()}/>
      </div>
    )
  }
}


export default App;

//so far, you've wrote the method for setting state to the selected product.
// But, you havent' done much with it in the Form file.
