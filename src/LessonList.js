import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { getCookie } from "./Utilities";

function LessonList(props) {
    const apiUrl = process.env.REACT_APP_API_URL;
    const [data, setData] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false);
    const [read, setRead] = useState([]);
    let lang=props.lang;
    const csrf = getCookie('csrftoken');

    const isRead = (file) => {
        return read.includes(file)
    }

    const handleCheck = (id) => {
        let cb = document.getElementById(id);
        let mode;
        if(cb.checked){
            mode="add";
            setRead(prevRead => [...prevRead, id])
        } else {
            mode="remove";
            setRead(prevRead => prevRead.filter(elem => elem !== id))
        }
        const data = {
            file: id,
            mode: mode
        }
        fetch(`${apiUrl}/set_read/`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrf
            },
            body: JSON.stringify(data),
        })
        .catch((err) => {
            console.log(err);
        })
    }


    //Get lesson list for specified language
    useEffect(() => {
        fetch(`${apiUrl}/get-lsn?lang=` + lang)
        .then((response) => response.json())
        .then((responseData) => {
            setData(responseData);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });

        fetch(`${apiUrl}/get_read`, {
            credentials: 'include'
        })
        .then((response) => {
            if(!response.ok){
                setLoggedIn(false);
            } else {
                return response.json();
            }
        }).then((responseData ) => {
            if(responseData){
                setLoggedIn(true);
                setRead(responseData);
            }
        }).catch((err) => {
            console.log(err);
        })
    }, [lang, apiUrl, loggedIn]);

    return (
        <>
        <center>
        <div className='top-round'>
            <p className='note-content'>
                Lessons are meant to be completed in order
                but you may skip ahead if you are already familiar with a topic
            </p>
        </div>
        <ul className='list-group'>
            { data.map( (lsn) =>
                <li className='list-group-item' key={ lsn.file }>
                    <div className="full-flex">
                        <Link to={ "/"+ lsn.file }>
                            <b> { lsn.name } </b>
                        </Link>
                        {loggedIn && (
                            <input
                                className="lesson-checkbox"
                                type="checkbox"
                                id={lsn.file}
                                key={lsn.file}
                                checked={ isRead(lsn.file) }
                                onChange={ () => handleCheck(lsn.file) }
                            />
                        )}
                    </div>
                </li>
            )}
        </ul>
        <div className='bottom-round'></div>
        </center>
        </>
    )
}

export default LessonList;