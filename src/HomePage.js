import React from 'react';
import LangCardSet from "./LangCardSet";

function HomePage(props){
    let notLogged = props.globUser === "";

    return (
        <>
            {(notLogged &&
            <>
            <div id="homepage-up-arrow"><h4>▲</h4></div>
            <div className="note-bubble">
                <h5>
                    Log in/sign up to track your progress!
                </h5>
            </div>
        </>
        )}
        <div className="jumbotron text-center">
            <center>
                <h1 className="hometitle">Lingogrind</h1>
                <p className="half-wide" id="homepage-blurb">
                Learning a new language can be a daunting task, and each language presents its own unique challenges. 
                Lingogrind caters crash courses and practice tools to get you up and running in no time. 
                Pick a language down below to see available lessons!
                </p>
                <br></br>
                <br></br>
            </center>
        </div>
        <center>
            <LangCardSet />
        </center>
        </>
    )
}

export default HomePage;