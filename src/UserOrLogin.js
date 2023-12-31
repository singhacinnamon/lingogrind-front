import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function UserOrLogin({ globUser, setGlobUser }) {

    const logOut = () => {
        fetch("/api/ling_logout");
        setGlobUser('')
    }

    const loggedIn = !globUser == '';
    return (
        <>
        { loggedIn ? (
            <div className="dropdown">
                <button className="btn dropdown-toggle right-caret position-static" id="logoutDropdown" type="button" aria-expanded="false"><h5>Hi, { globUser }</h5></button>
                <ul className="dropdown-menu">
                    <li className="dropdown-item"><Link to="/" onClick={logOut}><h5 className="w5">Log Out</h5></Link></li>
                </ul>
                
            </div>
        ) : (
            <Link to="/login">
                <h5 className="w5">Log In</h5>
            </Link>
        ) }
        </>
    )
}

export default UserOrLogin;


