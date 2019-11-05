import React, { Component } from 'react';
import Product from '../Product/Product';
import axios from 'axios';

export default class Dashboard extends Component {

    constructor(props) {
        super(props)
        // this.deleteProduct = this.deleteProduct.bind(this)
        this.deleteProduct = this.deleteProduct.bind(this)
    }


    // deleteProduct(productName) {
    //     axios
    //         .delete(`/api/product/${productName}`)
    //         .then(res => {
    //             this.props.getUpdatedInventory();
    //             this.setState({
    //                 inventory: res.data
    //             })
    //         })
    // }

    deleteProduct(product_id) {
        axios
            .delete(`/api/inventory/${product_id}`)
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
                    // <Product productObj={el} key={'product' + el.name} deleteProduct = {() => this.deleteProduct()} />
                    <Product editSelect={this.props.editSelect} productObj={el} key={'product' + el.name} deleteProduct = {(product_id) => this.deleteProduct(product_id)}/> //maybe add product_name in the beginning parenthesis??
                ))}
            </div>
        )
    }
}

