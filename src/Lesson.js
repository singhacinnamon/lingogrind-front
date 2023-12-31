import React from 'react';
import { Link } from "react-router-dom";
import backArrow from './images/back.png';

function Lesson({title, langCode, children}) {
    return (
        <>
        <div className='flex backdiv'>
            <Link to={"/" + langCode} className='backarr'>
                <img src={ backArrow } className='backarr' alt='' />
            </Link>
            <Link to={"/" + langCode} className='backarr'>
                <h5 className='back'>Lessons</h5>
                </Link>

        </div>
        <h1 className='title ctr'>{title}</h1>
        <div className = 'lesson'>
            {children}
        </div>
        </>
    )
};

export default Lesson;