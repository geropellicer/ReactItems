import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import '../style/nav.module.css';
import { styles } from 'ansi-colors';

const Nav = () => {

    const [display, setDisplay] = useState('none');
    const [selected, setSelected] = useState('none');

    let menuStyle = {
        display
    }

    const toggleDisplay = () => {
        if(display === 'none'){
            setDisplay('flex');
        } else if(display === 'flex'){
            setDisplay('none');
        }
    };

    return(
        <nav>
            <div className={styles.pageTitle}>
                <h1 className="title">Video Games Shop</h1>
            </div>

            <div className="menu">
                <h4 onClick={toggleDisplay}>Menú</h4>
                <ul style={menuStyle}>
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