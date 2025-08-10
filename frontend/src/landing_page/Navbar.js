import '../css/navbar.css'
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg border-bottom sticky-top nav-custom">
                <div class="container ms-auto">
                    <Link class="navbar-brand" to="/">
                        <img src='/Media/images/logo.svg' className='logo-img' />
                    </Link>
                   
                    <div className=" nav-comp" id="navbarSupportedContent">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <Link className="nav-link"  to="/signup">Signup</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link " to="/products" >Products</Link>
                                
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link " to="/pricing" >Pricing</Link>
                                
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link " to="/support" >Support</Link>
                                
                            </li>
                            
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </>

    );
}

export default Navbar;