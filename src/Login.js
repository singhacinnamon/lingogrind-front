import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getCookie } from "./Utilities"

function Login({ setGlobUser  }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [failed, setFailed] = useState(false);

    // useEffect(() => {
    //     const get_csrf = async () => {
    //       const response = await fetch("https://api.lingogrind.com/get_csrf", {
    //           method: 'GET',
    //           headers: {
    //             'Content-Type': 'application.json',
    //           },
    //       });
    //       if(response.ok) {
    //           const data = await response.json();
    //           document.cookie = "csrftoken=" + data.csrftoken
    //       }
    //   };
    //     get_csrf();
    //   }, []);

    const handleLogin = async () => {
        const data = {
            username: username,
            password: password,
        };
        const csrf = getCookie('csrftoken');
    
        const response = await fetch('https://api.lingogrind.com/ling_login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie("csrftoken")
            },
            body: JSON.stringify(data),
            credentials: "same-origin",
        });

        if (response.ok) {
            setFailed(false);
            setGlobUser(username)
            navigate(-1);
        } else {
            setFailed(true);
        }
    }
    
    return (
        <>
        <center>
            <h1>Log In</h1>
            <br/>
            <div className="form-div">
                <form>
                    <div className="form-group">
                        <label htmlFor="username"><h5 className="w5">Username: </h5></label>
                        <br/>
                        <input type="text" id="username" name="username" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"><h5 className="w5">Password: </h5></label>
                        <br/>
                        <input type="password" id="password" name="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    { failed ? <><label className="error-text">Username or password was incorrect. Please try again.</label><br/></>: <></>}
                    <button type="button" className="btn btn-db" onClick={ handleLogin }><h5 className="w5">Log In</h5></button>
                </form>
            </div>
            <br></br>
            <h5 className="w5">New to Lingogrind? Register <Link to="/reg"><u className='yellow'>here</u></Link></h5>
        </center>
        </>
    )
};

export default Login;