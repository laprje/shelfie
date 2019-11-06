import React, { Component } from 'react';
import './product.css'
import {Link} from 'react-router-dom'

export default class Product extends Component {
    
    deleteBtn() {
        this.props.deleteProduct(this.props.productObj.product_id)
        this.props.getUpdatedInventory()
    }
    render() {
        return (
            <div className="product">
                {this.props.productObj ? (
                    <div>
                        <h3>{this.props.productObj.name}</h3>
                        <h4>${this.props.productObj.price}</h4>
                        <img src={this.props.productObj.image_url} alt={this.props.productObj.name}></img>
                    </div>
                ) : null}
                <div className="btns">
                    {/* <button onClick={() => this.props.deleteProduct()}>DELETE</button> */}
                    <button onClick={() => { this.props.deleteProduct(this.props.productObj.product_id) }}>DELETE</button>

                    <Link to={`/add/${this.props.productObj.product_id}`}>
                        <button className="edit-btn">EDIT</button>
                    </Link>
                </div>
            </div>
        )
    }
}