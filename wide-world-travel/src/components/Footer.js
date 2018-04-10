import React from 'react';
import './footer.css';


let Footer = (props) => {

    return(
        <div className="container">
            <div className="footer">
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link " href={props.trips.trip1}>London </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={props.trips.trip2}>Paris </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={props.trips.trip3}>Berlin </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href={props.trips.trip4}>Tennessee </a>
                    </li>
                </ul>
            </div>
            <div className="text-center mt-5">
                <p>&copy 2018 Dylan Butzler</p>
            </div>
        </div>
    );
}


export default Footer;