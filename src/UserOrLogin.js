import React from 'react';
import { Link } from 'react-router-dom';

function UserOrLogin({ globUser, setGlobUser }) {
    const apiUrl = process.env.REACT_APP_API_URL;
    const logOut = async () => {
        const response = await fetch(`${apiUrl}/ling_logout`, {
            method: 'GET',
            credentials: 'include',
        });

        if(response.ok) {
            setGlobUser('');
            window.location.reload(); //Needed to make App.js reestablish csrf token for subsequent user sessions
        }
    }

    const loggedIn = globUser !== '';
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


