import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {

    constructor() {
        super();
        this.state = {
            productName: '',
            price: '',
            imageUrl: ''
        }
        this.baseState = this.state;
        this.createProduct = this.createProduct.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    cancel() {
        this.setState(this.baseState);
        
    }

    createProduct() {
        axios
        .post('api/product', this.state)
        .then( res => {
          this.setState({
            inventory: res.data
          })
        })
      }


    render() {
        return(
            <div>
                <input
                 placeholder="Add a Product Name"
                 onChange={(e) => this.handleChange(e)}
                 name='productName'
                 value={this.state.productNameInput}
                 >
                </input>

                <input
                 placeholder="Add a Price"
                 onChange={(e) => this.handleChange(e)}
                 name='price'
                 value={this.state.priceInput}
                 >
                 </input>

                <input
                 placeholder="Add an Image URL"
                 onChange={(e) => this.handleChange(e)}
                 name='imageUrl'
                 value={this.state.imageUrlInput}
                 >
                 </input>

                <button onClick={(e) => this.cancel(e)}>Cancel</button>
                <button>Add to Inventory</button>
            </div>
        )
    }
}

