import React, { Component } from 'react';
import Product from '../Product/Product';
import axios from 'axios';

export default class Dashboard extends Component {

    constructor() {
        super()
    }

    deleteProduct(id) {
        axios
        .delete('/api/product/:id')
    }

    render() {
        return (
            <div>
                <div>Dashboard.js</div>
                {this.props.inventory.map(el => (
                    <Product productObj={el} key={'product' + el.name} />
                ))}
            </div>
        )
    }
}

