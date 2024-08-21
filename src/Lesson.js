import React from 'react';
import { Link } from "react-router-dom";
import backArrow from './images/back.png';
import { getCookie } from './Utilities';

function Lesson({title, langCode, file, globUser, children}) {
    let loggedIn = globUser !== "";
    const apiUrl = process.env.REACT_APP_API_URL;
    const csrf = getCookie('csrftoken');
    const handleClick = () => {
        const data = {
            file: file,
            mode: "add"
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
    return (
        <>
        <div className='flex backdiv'>
            <Link to={"/" + langCode} className='backarr'>
                <img src={ backArrow } className='backarr' alt='' />
            </Link>
            <Link to={"/" + langCode} className='backarr'>
                <h3 className='back'>Lessons</h3>
                </Link>

        </div>
        <h1 className='title ctr'>{title}</h1>
        <div className = 'lesson ctr'>
            {children}
            {(loggedIn &&
                <Link to={"/" + langCode}>
                    <button className="mark-read-button" onClick={ handleClick }>Mark as read and return to lessons</button>
                </Link>
            )}
        </div>
        </>
    )
};

export default Lesson;