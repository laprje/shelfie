import React, { Component } from 'react';

export default class Product extends Component {
    render() {
        return(
            <div>
                <h3>{this.props.productObj.name}</h3>
                <h4>${this.props.productObj.price}</h4>
                <img src={this.props.productObj.imageUrl} alt={this.props.productObj.name}/>
            </div>
        )
    }
}

