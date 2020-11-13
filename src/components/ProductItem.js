import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class ProductItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            item:props.item
        }
    }

    onDelete(){
        axios.delete(`http://localhost:3005/products/${this.state.item.id}`);
        window.location.reload(true);
    }

    render(){
        if(this.state.item.Quantity > 0)
        {
            return(
                <tbody style={{background: 'rgba(76, 175, 80, 0.3)'}}>
                    <tr>
                        <td>
                        <Link to={`/products/${this.state.item.id}`}>
                        {this.state.item.Name}</Link>
                        </td>
                        <td>{this.state.item.EAN}</td>
                        <td>{this.state.item.Type}</td>
                        <td>{this.state.item.Weight}</td>
                        <td>{this.state.item.Color}</td>
                        <td>{this.state.item.Quantity}</td>
                        <td>{this.state.item.Price} €</td>
                        <td><p>
                            <label>
                            <input type="checkbox" checked={this.state.item.Active}/>
                            <span>On/Off</span>
                            </label>
                        </p></td>
                        <td><Link className="btn grey" to={`/products/${this.state.item.id}`}>View</Link></td>
                        <td><Link className="btn green" to={`/products/edit/${this.state.item.id}`}>Edit</Link></td>
                        <td><button onClick={this.onDelete.bind(this)} className="btn red">Delete</button></td>
                    </tr>
                </tbody>
            )
        }
        else
        {
            return(
                <tbody style={{background: 'rgba(255, 0, 0, 0.3)'}}>
                    <tr>
                        <td>
                        <Link to={`/products/${this.state.item.id}`}>
                        {this.state.item.Name}</Link>
                        </td>
                        <td>{this.state.item.EAN}</td>
                        <td>{this.state.item.Type}</td>
                        <td>{this.state.item.Weight}</td>
                        <td>{this.state.item.Color}</td>
                        <td>{this.state.item.Quantity}</td>
                        <td>{this.state.item.Price} €</td>
                        <td><p>
                            <label>
                            <input type="checkbox" checked={this.state.item.Active}/>
                            <span>On/Off</span>
                            </label>
                        </p></td>
                        <td><Link className="btn grey" to={`/products/${this.state.item.id}`}>View</Link></td>
                        <td><Link className="btn green" to={`/products/edit/${this.state.item.id}`}>Edit</Link></td>
                        <td><button onClick={this.onDelete.bind(this)} className="btn red">Delete</button></td>
                    </tr>
                </tbody>
            )
        }
    }
}

export default ProductItem;