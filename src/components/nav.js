import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    return(
        <nav>
            <div className="page-title">
                <h1>Video Games Shop</h1>
            </div>

            <div className="menu">
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/about">
                        <li>About</li>  
                    </Link>
                    <Link to="/shop">
                        <li>Shop</li>
                    </Link>
                    <Link to="/versus">
                        <li>Versus</li>
                    </Link>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;