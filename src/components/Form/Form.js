import React, { Component } from 'react';
import axios from 'axios';
import './form.css';
import {Link} from 'react-router-dom';

export default class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product_id: null,
            name: '',
            price: null,
            image_url: '',
            show: true
        }
        this.baseState = this.state;
        this.createProduct = this.createProduct.bind(this);
        this.clearForm = this.clearForm.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
    }

    componentDidMount() {
        
        if (this.props.match.params.product_id) {
            axios
                .get(`api/inventory/${this.props.match.params.product_id}`)
                
                .then(res => {
                    
                    let {name, image_url, price, product_id} = res.data[0]
                    this.setState({
                        product_id: product_id, 
                        name: name, 
                        image_url: image_url, 
                        price: price, 
                        show: false
                    })
                    // console.log(this.state)
                })
                .catch(err => console.log(err))
        }
    }

    saveChanges() {
        axios
            .put(`/api/inventory/${this.state.product_id}`, this.state)
            .then(() => this.props.history.push("/"))
            .catch(err => console.log(err))
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
                
                this.setState({
                    inventory: res.data
                })
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
                        name='name'
                        value={this.state.name}
                    >
                    </input>

                    <input
                        className="input"
                        placeholder="Add a Price"
                        onChange={(e) => this.handleChange(e)}
                        name='price'
                        value={this.state.price}
                    >
                    </input>

                    <input
                        className="input"
                        placeholder="Add an Image URL"
                        onChange={(e) => this.handleChange(e)}
                        name='image_url'
                        value={this.state.image_url}
                    >
                    </input>
                </form>
                <div className="btns">
                    <button onClick={(e) => this.clearForm(e)}>Cancel</button>

                    <Link to="/">
                    <button hidden={!this.state.show} className="add" onClick={this.createProduct}>Add</button>
                    </Link>

                    <button hidden={this.state.show} className="save" onClick={this.saveChanges}>Save Changes</button>
                </div>
            </div>
        )
    }
}