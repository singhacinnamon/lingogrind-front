import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import Es from "./Es";
import Th from "./Th";
import About from "./About";
import LessonComponentLoader from './LessonComponentLoader';
import Login from './Login';
import UserOrLogin from './UserOrLogin';
import Register from './Register'
import { getCookie } from './Utilities';  
function App() {

  const [data, setData] = useState([]);
  const [globUser, setGlobUser] = useState('');
  const csrf = getCookie('csrftoken')
  console.log("csrf token is: " + csrf)

  useEffect(() => {                     //Fetching in a useEffect is sometimes inadvisable but App is only rendered once
    const setLsnRoutes = async () => {
      await fetch("https://api.lingogrind.com/get-lsn?lang=es", {
      headers:{
        'X-CSRFToken' : csrf,
      }
      })
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData);
      })
      .catch((error) => {
          console.error('Error fetching data:', error);
      });
    }
    setLsnRoutes();
  }, []);

  useEffect(() => {
    const get_user = async () => {
      const response = await fetch("https://api.lingogrind.com/get_user/", {
          method: 'GET',
          headers: {
            'X-CSRFToken' : csrf,
            'Content-Type': 'application.json',
          },
      });
      if(response.ok) {
          const data = await response.json();
          setGlobUser(data.username);
      }
  };
    get_user();
  }, []);
  
  return (
    <>
      <Router>
        <div className="container-fluid" id="nav-container">
          <ul className="navbar-nav">
            <li className="lefty">
              <Link to="/">
                <h1 id="logo">Lingogrind</h1>
              </Link>
            </li>
            <li className="righty">
                <Link to="/about">
                    <h5>About</h5>
                </Link>
            </li>
            <li className="righty">
              <UserOrLogin globUser={ globUser } setGlobUser={ setGlobUser } />
            </li>
          </ul>
        </div>
        <div className="container-fluid">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/es" element={<Es />} />
            <Route path="/th" element={<Th />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login setGlobUser={ setGlobUser }/>} />
            <Route path="/reg" element={<Register setGlobUser={ setGlobUser }/>} />
            { data.map( (lsn) =>
              <Route
              key={lsn.file}
              path={`/${lsn.file}`}
              element={<LessonComponentLoader componentName={lsn.file} />}
              />
            )}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
