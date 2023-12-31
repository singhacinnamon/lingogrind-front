import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"

function LessonList(props) {
    const [data, setData] = useState([]);
    let lang=props.lang;

    //Get lesson list for specified language
    useEffect(() => {
        fetch("/api/get-lsn?lang=" + lang)
        .then((response) => response.json())
        .then((responseData) => {
            setData(responseData);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    }, []);

    return (
        <>
        <center>
        <div className='top-round'><p className='note-content'>Lessons are meant to be completed in order
        but you may skip ahead if you are already familiar with a topic</p></div>
        <ul className='list-group'>
            { data.map( (lsn) =>
                <Link to={ "/"+ lsn.file }><li className='list-group-item'><b> { lsn.name } </b></li></Link>
            )}
        </ul>
        <div className='bottom-round'></div>
        </center>
        </>
    )
}

export default LessonList;