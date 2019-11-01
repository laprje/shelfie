import React, { Component } from 'react';
import './product.css'

export default class Product extends Component {
    constructor() {
        super()

    }
    render() {
        return (
            <div className="product">
                <h3>{this.props.productObj.name}</h3>
                <h4>${this.props.productObj.price}</h4>
                <img src={this.props.productObj.image_url} alt={this.props.productObj.name}></img>
                <div className="btns">
                    <button onClick={() => this.props.deleteProduct()}>DELETE</button>
                </div>
            </div>
        )
    }
}

