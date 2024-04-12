import React, { useState } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import './login.css';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(prevVisible => !prevVisible);
  };

  const Icon = visible ? <FaRegEyeSlash className='eyeIcon' onClick={toggleVisibility} /> : <FaRegEye className='eyeIcon'   onClick={toggleVisibility} />;
  const InputType = visible ? "text" : "password";

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Login attempted Name:', username);
    console.log('Login attempted Password:', password);
  
  };

  return (
   
    <div className="loginform">
  <form onSubmit={handleSubmit}>
    <div className="inputWithIcon">
      <FaUserCircle className="icon" id='userIcons' />
      <input
        className='user'
        type="text"
        placeholder="User ID"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        required
        maxLength={10}
      />
    </div>
    
    <div className="inputWithIcon">
      <FaLock className="icon" id='lockicons' />

      <input
        className='lock'
        type={InputType}
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
        maxLength={10}
      />
            {Icon}

    </div>
        <br />
        <button type="submit" className='submit'>Login</button>
        <div className='or'>
          <p>OR</p>
        </div>
        <div className='button-container'>
  <FcGoogle className='google'/>
  <button type='button' className='butcolor'>Sign-In with GOOGLE</button>
</div>

        
      </form>
      
    </div>
  );
};

export default Login;

