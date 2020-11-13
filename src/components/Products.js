import React, {Component} from 'react';
import axios from 'axios';
import {Table} from 'react-bootstrap';
import ProductItem from './ProductItem';

class Products extends Component{
    constructor() {
        super();
        this.state = {
            products: []
        }
    }

    componentDidMount(){
        this.getProducts();
    }

    getProducts() {
        axios.get('http://localhost:3005/products')
        .then(response => {
            this.setState({ products: response.data }, () =>{
                //console.log(this.state);
            })
        })
        .catch(err => console.log(err));
    }

    render () {

        const productItems = this.state.products.map((product, i) => {
            return(
                <ProductItem key={product.id} item={product}/>
            )
        })

        return (
            <div>
                <h1>Products</h1>
                <Table>
                    <thead>
                        <tr>
                            <th><h3>Name </h3></th>
                            <th><h3>EAN </h3></th>
                            <th><h3>Type </h3></th>
                            <th><h3>Weight(kg) </h3></th>
                            <th><h3>Color </h3></th>
                            <th><h3>Quantity </h3></th>
                            <th><h3>Price </h3></th>
                            <th><h3>Active</h3></th>
                        </tr>
                    </thead>
                        {productItems}
                </Table>
            </div>
        )
    }
}

export default Products;