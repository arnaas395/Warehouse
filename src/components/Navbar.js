import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component{
    render() {
        return (
            <div>
                <nav className="green darken-3">
                    <div className="nav-wrapper">
                        <a href="/" className="brand-logo">Warehouse</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to="/">Products</Link></li>
                            <li><Link to="/products/create">Add Product</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;