import React, { useState } from "react";
import axios from 'axios';

function LoginForm({onSubmit}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/authenticate",
        { email, password }
      );

      localStorage.setItem('token', response.data.token);
      window.location.reload();
    } catch (error) {
      setErrorMessage('Wrong email or password. Please try again.');
    }
  }

  return (
    <>
      <h3>Login</h3>
      <form onSubmit={handleSubmit} className={"login_form"}>
        <label htmlFor="email_input">Email</label>
        <input placeholder={"email"} id={"email_input"} value={email} onChange={(e) => setEmail(e.target.value)} />
        <br/>
        <label htmlFor="password_input">Password</label>
        <input placeholder={"password"} id={"password_input"} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br/>
        <div>{errorMessage}</div>
        <input type={'submit'}/>
      </form>
    </>
  )
}

export default LoginForm;

