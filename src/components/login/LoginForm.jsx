import React, { useState } from 'react';
import axios from 'axios';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const user = {
      email: email,
      password: password
    };

    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/authenticate', user);
      console.log(response.data);
      console.log(response.data.email);
      setLoggedInUser(response.data);
      console.log(loggedInUser);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {loggedInUser ? (
        <p>Logged in as {loggedInUser.email}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email_input">Email</label>
          <input 
            type="email"
            placeholder="email"
            id="email_input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br/>
          <label htmlFor="password_input">Password</label>
          <input 
            type="password"
            placeholder="password"
            id="password_input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br/>
          <button type="submit">Login</button>
        </form>
      )}
    </>
  );
}

export default LoginForm;
