import React from 'react';
import './bodyimage.css';


let PrettyPic = (props) => {
    return(
        <div className="pretty-pic">
            <img src={props.pic} alt="Responsive" />
        </div>
    );
}


export default PrettyPic;