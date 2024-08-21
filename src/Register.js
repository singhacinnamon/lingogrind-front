import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validUserPass } from "./Utilities"

function Register({ setGlobUser  }) {
    const apiUrl = process.env.REACT_APP_API_URL;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [match, setMatch] = useState(true); //For checking if password matches confirm password field
    const [validMsg, setValidMsg] = useState([]);
    const navigate = useNavigate();
    const [taken, setTaken] = useState(false); //Used for username conflicts

    const handleReg = async () => {
        if(password !== confirmPass){
            setMatch(false);
            setValidMsg([]);
            return;
        } else {
            setMatch(true);
        }
        const data = {
            username: username,
            password: password,
        };
        let validMsgVar = validUserPass(username, password)
        setValidMsg(validMsgVar);
        if(validMsgVar.length > 0){
            return;
        }
    
        const response = await fetch(`${apiUrl}/ling_reg/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(data),
        });

        if (response.ok) {
            setTaken(false);
            setGlobUser(username)
            navigate(-2);
        } else {
            setTaken(true);
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
                        { taken ? <><label className="error-text">This username is taken. Please try another name. </label><br/></>: <></>}
                        { match ? <></>: <><label className="error-text">Passwords do not match!</label><br></br></>}
                        { validMsg.map((msg) => <><label className="error-text">{ msg }</label><br></br></>) }
                        <button type="button" className="btn btn-db" onClick={ handleReg }><h5 className="w5">Register</h5></button>
                    </form>
                </div>
        </center>
        </>
    )
};

export default Register;