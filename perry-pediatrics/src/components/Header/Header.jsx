import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Header extends Component {
    render() {
        return (
            <div className="header">
                <div>
                <Link to='/'><h1>Perry Pediatrics</h1></Link>
                </div>

                <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">  
                </div>

                <div className="nav-options">
            <ul className="header-nav">
                
                <li><Link to='/about'>About</Link></li>
               <li> <Link to='/services'>Services</Link></li>
                <li><Link to='/visit'>Visit</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                </ul>
                </div>
                </nav>
            </div>
        );
    }
}

export default Header;