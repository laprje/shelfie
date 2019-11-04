import React, { Component } from 'react';
import axios from 'axios';
import './form.css'

export default class Form extends Component {

    constructor() {
        super();
        this.state = {
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
        if(oldProps.data ===! this.props.data) {
            this.setState({
                product_name: this.props.product_name,
                price: this.props.price,
                image_url: this.props.image_url,
                addOrSave: "Save Changes",
                editingId: this.props.product_id //you left off here!!!! 
            })
            
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

