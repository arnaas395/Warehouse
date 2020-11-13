import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class AddProduct extends Component{
    addProduct(newProduct){
        axios.request({
            method:'post',
            url:'http://localhost:3005/products',
            data: newProduct
        }).then(response => {
            this.props.history.push('/');
        }).catch(err => console.log(err));
    }
    
    onSubmit(e){
        const newProduct = {
            Name: this.refs.name.value,
            EAN: this.refs.ean.value,
            Type: this.refs.type.value,
            Weight: this.refs.weight.value,
            Color: this.refs.color.value,
            Quantity: this.refs.quantity.value,
            Price: this.refs.price.value,
            Active: false
        }

        this.addProduct(newProduct);

        e.preventDefault();
    }

    render(){
        return (
            <div className="container">
                <br/>
                <Link className="btn grey" to="/">Back</Link>
                <h1>Add Product</h1>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="input-field">
                        <input type="text" name="name" ref="name"/>
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="ean" ref="ean"/>
                        <label htmlFor="ean">EAN</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="type" ref="type"/>
                        <label htmlFor="type">Type</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="weight" ref="weight"/>
                        <label htmlFor="weight">Weight</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="color" ref="color"/>
                        <label htmlFor="color">Color</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="quantity" ref="quantity"/>
                        <label htmlFor="quantity">Quantity</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="price" ref="price"/>
                        <label htmlFor="price">Price €</label>
                    </div>
                    <input type="submit" value="Save" className="btn"/>
                </form>
            </div>
        )
    }
}

export default AddProduct;