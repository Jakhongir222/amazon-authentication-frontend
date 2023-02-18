import React, { useState } from 'react';
import "./Login.css"

function NewUserForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [userType, setUserType] = useState('user');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      email: email,
      password: password,
      confirmedPassword: confirmedPassword,
      userType: userType,
      firstname: firstname,
      lastname: lastname
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
      setFirstname('');
      setLastname('');
    })
    .catch(error => console.error(error));
  };

  return (
    <>
      <h3 className="form-title">Create new user</h3>
      <form onSubmit={handleSubmit} className="create_user_form">
      <label htmlFor="firstname_input" className="form-label">First name</label>
        <input 
          type="text"
          placeholder="first name"
          id="firstname_input"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          className="form-input"
        />
        <br/>
        <label htmlFor="lastname_input" className="form-label">Last name</label>
        <input 
          type="text"
          placeholder="last name"
          id="lastname_input"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          className="form-input"
        />
        <br/>
        <label htmlFor="email_input" className="form-label">Email</label>
        <input 
          type="email"
          placeholder="email"
          id="email_input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input"
        />
        <br/>
        <label htmlFor="password_input" className="form-label">Password</label>
        <input 
          type="password"
          placeholder="password"
          id="password_input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-input"
        />
        <br/>
        <label htmlFor="confirmed_password_input" className="form-label">Confirm password</label>
        <input 
          type="password"
          placeholder="confirm password"
          id="confirmed_password_input"
          value={confirmedPassword}
          onChange={(e) => setConfirmedPassword(e.target.value)}
          className="form-input"
        />
        <br/>
        <label htmlFor="type_input" className="form-label">Type of User</label>
        <select 
          placeholder="user"
          id="type_input"
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
          className="form-input"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <br/>
        <button type="submit" className="form-button">Submit</button>
      </form>
    </>
  );
}

export default NewUserForm;
