import React from 'react';
import {Link } from "react-router-dom";

class Menu extends React.Component{
    
    render(){
        return (
            <ul className="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        )
    }
}

export default Menu;