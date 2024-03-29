import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCookie } from "./Utilities"

function Register({ setGlobUser  }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [match, setMatch] = useState(true); //For checking if password matches confirm password field
    const navigate = useNavigate();
    const [failed, setFailed] = useState(false); //Used for username conflicts

    const handleReg = async () => {
        if(password != confirmPass){
            setMatch(false);
            return;
        } else {
            setMatch(true);
        }
        const data = {
            username: username,
            password: password,
        };
        const csrf = getCookie('csrftoken');
    
        const response = await fetch('https://api.lingogrind.com/ling_reg/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrf
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            setFailed(false);
            setGlobUser(username)
            navigate(-2);
        } else {
            setFailed(true);
        }
    }
    
    return (
        <>
        <center>
            <h1>Register</h1>
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
                        <div className="form-group">
                            <label htmlFor="confirmPass"><h5 className="w5">Confirm Password: </h5></label>
                            <br/>
                            <input type="password" id="confirmPass" name="confirmPass" className="form-control" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} />
                        </div>
                        { failed ? <><label className="error-text">This username is taken. Please try another name. </label><br/></>: <></>}
                        { match ? <></>: <><label className="error-text">Passwords do not match!</label><br></br></>}
                        <button type="button" className="btn btn-db" onClick={ handleReg }><h5 className="w5">Register</h5></button>
                    </form>
                </div>
        </center>
        </>
    )
};

export default Register;