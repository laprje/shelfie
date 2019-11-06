// import React, { Component } from 'react';
// import './App.css'
// import Header from './components/Header/Header';
// import Dashboard from './components/Dashboard/Dashboard';
// import Form from './components/Form/Form';
// import axios from 'axios';


// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       inventory: [],
//       currentProduct: {}
//     }

//     // this.createProduct = this.createProduct.bind(this);
//     // this.editSelect = this.editSelect.bind(this);
//   }



//   // editSelect(product) {
//   //   this.setState({
//   //     currentProduct: product
//   //   })
//   // }



//   render() {
//     console.log(this.state.inventory)
//     return (
//       <div>
//         <Header />
//         <Form product={this.state.currentProduct} getUpdatedInventory = {() => this.getUpdatedInventory()} />
//         <Dashboard currentProduct={this.currentProduct} inventory={this.state.inventory} getUpdatedInventory = {() => this.getUpdatedInventory()}/>
//       </div>
//     )
//   }
// }


// export default App;




import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header'
import Routes from './routes';

class App extends Component {
  
    render() { 
      return (
        <div className="App">
          <Header />
          {Routes}
        </div>
      )
    }
  }
  
export default App; 


