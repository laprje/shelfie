import React, { Component } from 'react';
import Product from '../Product/Product';
import axios from 'axios';

export default class Dashboard extends Component {

    constructor() {
        super()
        this.state = {
            inventory: []
        }
        
        // this.getupdatedInventory = this.getupdatedInventory.bind(this);
        
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

    deleteProduct(product_id) {
        axios
            .delete(`/api/inventory/${product_id}`)
            .then(res => {
                console.log(this.state.inventory);
                this.getUpdatedInventory();
                this.setState({
                    inventory: [res.data]
                })
                
            })
    }

    render() {
        return (
            <div>
                <div>Dashboard.js</div>
                {this.state.inventory.map(el => (
                    <Product 
                    getUpdatedInventory={this.getUpdatedInventory} 
                    productObj={el} key={'product' + el.name} 
                    deleteProduct = {(product_id) => this.deleteProduct(product_id)}
                    /> 
                ))}
            </div>
        )
    }
}

