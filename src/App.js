import React, { Component } from 'react';

import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import axios from 'axios';


class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: []
    }

    this.createProduct = this.createProduct.bind(this);
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



  render() {
    console.log(this.state.inventory)
    return (
      <div>
        <Header />
        <Form />
        <Dashboard inventory={this.state.inventory}/>
      </div>
    )
  }
}


export default App;
