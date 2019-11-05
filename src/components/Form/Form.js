import React, { Component } from 'react';
import axios from 'axios';
import './form.css'

export default class Form extends Component {

    constructor() {
        super();
        this.state = {
            id: null,
            product_name: '',
            price: null,
            image_url: '',
            addOrSave: 'Add to Inventory',
            editingId: null
        }
        this.baseState = this.state;
        this.createProduct = this.createProduct.bind(this);
        this.clearForm = this.clearForm.bind(this);

    }

    componentDidUpdate(oldProps) {
        let { id, name, price, img } = this.props.product;
        if (oldProps.product.id !== this.props.product.id) {
          this.setState({ id, name, price, img, edit: true });
        }
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
                    inventory: res.data,
                    addOrSave: "Add to Inventory"
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
                        name='product_name'
                        value={this.state.product_nameInput}
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
                <div className="btns">
                    <button onClick={(e) => this.clearForm(e)}>Cancel</button>
                    <button className="add-btn" onClick={(e) => this.createProduct(e)}>{this.state.addOrSave}</button>
                </div>
            </div>
            
        )
    }
}

