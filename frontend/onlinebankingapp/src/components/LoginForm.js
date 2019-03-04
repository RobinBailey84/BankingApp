import React from 'react';

const LoginForm = (props) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const login = {
      "username": event.target.username.value,
      "password": event.target.password.value,
    }
    console.log('handleSubmit Login Form', login);
    props.onSubmit(login);
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <p>Please enter your Login details</p>
          <p>UserName: <input type="text" placeholder="UserName" name="username"/></p>
          <p>Password: <input type="password" placeholder="Password" name="password"/></p>
          <button type="submit">Login</button>
        </form>
      </div>
  )
}

export default LoginForm;
