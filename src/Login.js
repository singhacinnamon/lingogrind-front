import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getCookie, validUserPass } from "./Utilities";

function Login({ setGlobUser  }) {
    const apiUrl = process.env.REACT_APP_API_URL;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [validMsg, setValidMsg] = useState([]);
    const navigate = useNavigate();
    const [taken, setTaken] = useState(false);

    const handleLogin = async () => {
        const data = {
            username: username,
            password: password,
        };
        let validMsgVar = validUserPass(username, password)
        setValidMsg(validMsgVar);
        if(validMsgVar.length > 0){
            return;
        }
        const csrf = getCookie('csrftoken');
    
        const response = await fetch(`${apiUrl}/ling_login/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrf
            },
            credentials: 'include',
            body: JSON.stringify(data),
        });

        if (response.ok) {
            setTaken(false);
            setGlobUser(username)
            navigate(-1);
        } else {
            setTaken(true);
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
                    { taken ? <><label className="error-text">Username or password was incorrect. Please try again.</label><br/></>: <></>}
                    { validMsg.map((msg) => <><label className="error-text">{ msg }</label><br></br></>) }
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