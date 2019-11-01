import React, { Component } from 'react';
import Product from '../Product/Product';
import axios from 'axios';

export default class Dashboard extends Component {

    constructor() {
        super()
        this.deleteProduct = this.deleteProduct.bind(this)
    }


    deleteProduct(productName) {
        axios
        .delete(`/api/product/${productName}`)
        .then(res => {
            this.props.getUpdatedInventory();
            this.setState({
                inventory: res.data
            })
        })
    }

    render() {
        return (
            <div>
                <div>Dashboard.js</div>
                {this.props.inventory.map(el => (
                    <Product productObj={el} key={'product' + el.name} deleteProduct = {() => this.deleteProduct()} />
                ))}
            </div>
        )
    }
}

