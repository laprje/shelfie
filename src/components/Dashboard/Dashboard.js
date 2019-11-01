import React, { Component } from 'react';
import Product from '../Product/Product';

export default class Dashboard extends Component {
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

