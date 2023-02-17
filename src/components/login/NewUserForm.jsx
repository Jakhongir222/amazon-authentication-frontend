import React, { useState } from 'react';

function NewUserForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [userType, setUserType] = useState('user');

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      email: email,
      password: password,
      confirmedPassword: confirmedPassword,
      userType: userType
    };

    fetch('http://localhost:8080/api/v1/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      localStorage.setItem('token', data.token);
      alert('New user successfully registered');
      setEmail(''); 
      setPassword(''); 
      setConfirmedPassword('');
    })
    .catch(error => console.error(error));
  };

  return (
    <>
      <h3>Create new user</h3>
      <form onSubmit={handleSubmit} className="create_user_form">
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
        <label htmlFor="confirmed_password_input">Confirm password</label>
        <input 
          type="password"
          placeholder="confirm password"
          id="confirmed_password_input"
          value={confirmedPassword}
          onChange={(e) => setConfirmedPassword(e.target.value)}
        />
        <br/>
        <label htmlFor="type_input">Type of User</label>
        <select 
          placeholder="user"
          id="type_input"
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <br/>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}


export default NewUserForm;
