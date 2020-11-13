import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class EditProduct extends Component{

    constructor(props){
        super(props);
        this.state = {
            id:"",
            Name:"",
            EAN:"",
            Type:"",
            Weight:"",
            Color:"",
            Quantity:"",
            Price:"",
            Active:""
        }
        
    }

    componentDidMount(){
        this.getProductDetails();
    }

    getProductDetails() {
        let productId = this.props.match.params.id;
        axios.get(`http://localhost:3005/products/${productId}`)
        .then(response => {
            this.setState({
                id: response.data.id,
                Name: response.data.Name,
                EAN: response.data.EAN,
                Type: response.data.Type,
                Weight: response.data.Weight,
                Color: response.data.Color,
                Quantity: response.data.Quantity,
                Price: response.data.Price,
                Active: response.data.Active
            }, () => {
                console.log(this.state);
            });
        })
        .catch(err => console.log(err));
    }

    editProduct(newProduct){
        axios.request({
            method:'put',
            url:`http://localhost:3005/products/${this.state.id}`,
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
            Active: this.refs.active.checked
        }

        this.editProduct(newProduct);
        console.log(newProduct);

        e.preventDefault();
    }

    updateName(e){
        this.setState({Name: e.target.value});
    }
    updateEan(e){
        this.setState({EAN: e.target.value});
    }
    updateType(e){
        this.setState({Type: e.target.value});
    }
    updateWeight(e){
        this.setState({Weight: e.target.value});
    }
    updateColor(e){
        this.setState({Color: e.target.value});
    }
    updateQuantity(e){
        this.setState({Quantity: e.target.value});
    }
    updatePrice(e){
        this.setState({Price: e.target.value});
    }
    updateActive(e){
        this.setState({Active: e.target.checked});
    }
    
    render(){
        return (
            <div className="container">
                <br/>
                <Link className="btn grey" to="/">Back</Link>
                <h1>Edit Product</h1>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="input-field">
                        <input type="text" name="name" ref="name" value={this.state.Name} 
                        onChange={this.updateName.bind(this)}/>
                    </div>
                    <div className="input-field">
                        <input type="text" name="ean" ref="ean" value={this.state.EAN}
                        onChange={this.updateEan.bind(this)}/>
                    </div>
                    <div className="input-field">
                        <input type="text" name="type" ref="type" value={this.state.Type}
                        onChange={this.updateType.bind(this)}/>
                    </div>
                    <div className="input-field">
                        <input type="text" name="weight" ref="weight" value={this.state.Weight}
                        onChange={this.updateWeight.bind(this)}/>
                    </div>
                    <div className="input-field">
                        <input type="text" name="color" ref="color" value={this.state.Color}
                        onChange={this.updateColor.bind(this)}/>
                    </div>
                    <div className="input-field">
                        <input type="text" name="quantity" ref="quantity" value={this.state.Quantity}
                        onChange={this.updateQuantity.bind(this)}/>
                    </div>
                    <div className="input-field">
                        <input type="text" name="price" ref="price" value={this.state.Price}
                        onChange={this.updatePrice.bind(this)}/>
                    </div>

                    <p>
                    <label>
                        <input type="checkbox" ref="active" className="filled-in" checked={this.state.Active} 
                        onChange={this.updateActive.bind(this)}/>
                        <span>On/Off</span>
                    </label>
                    </p>

                    <input type="submit" value="Save" className="btn"/>
                </form>
            </div>
        )
    }
}

export default EditProduct;