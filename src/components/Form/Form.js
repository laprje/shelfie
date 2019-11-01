import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {

    constructor() {
        super();
        this.state = {
            productName: '',
            price: null,
            image_url: ''
        }
        this.baseState = this.state;
        this.createProduct = this.createProduct.bind(this);
        this.clearForm = this.clearForm.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    clearForm() {
        const form = document.getElementById("addForm")
        form.reset();
        this.setState(this.baseState);
    }

    createProduct() {
        axios
            .post('api/product', this.state)
            .then(res => {
                this.props.getUpdatedInventory();
                this.setState({
                    inventory: res.data
                })
                this.clearForm();
            })
    }


    render() {
        return (
            <div>
                <form id="addForm">
                    <input
                        className="input"
                        placeholder="Add a Product Name"
                        onChange={(e) => this.handleChange(e)}
                        name='productName'
                        value={this.state.productNameInput}
                    >
                    </input>

                    <input
                        className="input"
                        placeholder="Add a Price"
                        onChange={(e) => this.handleChange(e)}
                        name='price'
                        value={this.state.priceInput}
                    >
                    </input>

                    <input
                        className="input"
                        placeholder="Add an Image URL"
                        onChange={(e) => this.handleChange(e)}
                        name='image_url'
                        value={this.state.imageUrlInput}
                    >
                    </input>
                </form>

                <button onClick={(e) => this.clearForm(e)}>Cancel</button>
                <button onClick={(e) => this.createProduct(e)}>Add to Inventory</button>
            </div>
        )
    }
}

