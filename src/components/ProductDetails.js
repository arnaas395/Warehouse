import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class ProductDetails extends Component{
    constructor(props){
        super(props);
        this.state = {
            details:''
        }
    }

    componentDidMount(){
        this.getProduct();
    }

    getProduct() {
        let productId = this.props.match.params.id;
        axios.get(`http://localhost:3005/products/${productId}`)
        .then(response => {
            this.setState({details: response.data }, () =>{
                console.log(this.state);
            })
        })
        .catch(err => console.log(err));
    }

    render(){
        return(
            <div>
                <br/>
                <Link className="btn grey" to="/">Back</Link>
                <h1>{this.state.details.Name}</h1>
                <ul className="collection">
                <li className="collection-item">ID: {this.state.details.id}</li>
                <li className="collection-item">EAN: {this.state.details.EAN}</li>
                <li className="collection-item">Type: {this.state.details.Type}</li>
                <li className="collection-item">Weight: {this.state.details.Weight}</li>
                <li className="collection-item">Color: {this.state.details.Color}</li>
                <li className="collection-item">Quantity: {this.state.details.Quantity}</li>
                <li className="collection-item">Price: {this.state.details.Price} €</li>
                </ul>
            </div>
        )
    }
}

export default ProductDetails;