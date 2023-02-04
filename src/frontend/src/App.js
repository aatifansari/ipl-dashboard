import './App.css';
import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { TeamPage } from './pages/TeamPage';
import { MatchPage } from './pages/MatchPage';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {
  const token = getToken();

  if(!token) {
    return <LoginPage setToken={setToken} />
  }
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/login" element= {<LoginPage/>} />
          <Route path = "/teams/:teamName" element = {<TeamPage/>} />
          <Route path = "/teams/:teamName/matches/:year" element = {<MatchPage/>} />
          <Route path = "/team" element = {<HomePage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
