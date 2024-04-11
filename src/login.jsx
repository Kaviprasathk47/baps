import React, { useState } from 'react';
import './login.css'; 
import { FiUser } from "react-icons/fi";
import { FaLock } from "react-icons/fa6";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState(''); 

  const handleSubmit = (event) => { 
    event.preventDefault();
    console.log('Login attempted Name:', username);
    console.log('Login attempted Password:',password); 
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"  
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          required
        />
        <FiUser />
        <br /> 

        <input
          type="password" 
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <FaLock />
        <br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
