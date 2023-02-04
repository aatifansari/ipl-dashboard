import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './LoginPage.css';

async function loginUser(credentials) {
  const url = 'http://localhost:8080/api/v1/auth/authenticate';
  const params = {
    method: 'POST',
    headers: { 
     "Content-Type": "application/json",
     "Access-Control-Allow-Origin": "*",
     "Accept": 'application/json',
     "Origin" : "http://localhost:3000" 
   },
    body: JSON.stringify(credentials)
  }
  return await fetch(url,params).then(data => data.json())
}

export const LoginPage = ({ setToken }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password
    });
    setToken(token);
  }

  return(
    <div className="LoginPage">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

LoginPage.propTypes = {
  setToken: PropTypes.func.isRequired
};