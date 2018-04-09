import React from 'react';
import logo from './images/image.webp'

function Header(props){
    return (
        <header class="App-header">
        <img src={logo} className="bodyImage" alt="logo"/>
        <li class="header-title">{props.title}</li>
        </header>
    )
}

export default Header;