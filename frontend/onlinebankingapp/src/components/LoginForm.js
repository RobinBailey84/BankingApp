import React from 'react';

const LoginForm = (props) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const login = {
      "username": event.target.username.value,
      "password": event.target.password.value,
    }
    props.onSubmit(login);
  }

  return (
    <div className = "loginPage">
        <form onSubmit={handleSubmit}>
        <img src="/images/IRMLogo.png" alt="Logo"/>
          <h1>The IRM Bank</h1>
          <h4>Please enter your Login details</h4>
          <p>UserName: <input type="text" placeholder="UserName" name="username"/></p>
          <p>Password: <input type="password" placeholder="Password" name="password"/></p>
          <button type="submit">Login</button>
        </form>
      </div>
  )
}

export default LoginForm;
