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

  const apiUrl = process.env.REACT_APP_API_URL;
  const [data, setData] = useState([]);
  const [globUser, setGlobUser] = useState('');

  useEffect(() => {
    const get_csrf = async () => {
      const response = await fetch(`${apiUrl}/get_csrf`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application.json',
          },
          credentials: 'include'
      });
      if(response.ok) {
          const data = await response.json();
          document.cookie = "csrftoken=" + data.csrftoken
      }
  };
    get_csrf();
  }, [apiUrl]);

  const csrf = getCookie("csrftoken")
  useEffect(() => {                     //Fetching in a useEffect is sometimes inadvisable but App is only rendered once
    const setLsnRoutes = async () => {
      await fetch(`${apiUrl}/get-lsn?lang=es`, {
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
  }, [apiUrl, csrf]);

  useEffect(() => {
    const get_user = async () => {
      const response = await fetch(`${apiUrl}/get_user/`, {
          method: 'GET',
          headers: {
            'X-CSRFToken' : csrf,
            'Content-Type': 'application.json',
          },
          credentials: 'include',
      });
      if(response.ok) {
          const data = await response.json();
          setGlobUser(data.username);
      }
  };
    get_user();
  }, [apiUrl,csrf]);
  
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
