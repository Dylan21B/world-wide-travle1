import React from 'react';
import prettyPicture from './images/image.webp'

function Body(props){
    return (
        <body class="App-header">
        <img src={logo} className="bodyImage" alt="logo"/>
        <li class="header-title">{props.title}</li>
        </body>
    )
}

export default Body;