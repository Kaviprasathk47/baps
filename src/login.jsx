import React, { useState, useRef } from 'react';
import {  FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import './login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);
  const usernameInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const toggleVisibility = () => {
    setVisible(prevVisible => !prevVisible);
  };

  const focusInput = (inputRef) => {
    inputRef.current.focus();
  };

  const Icon = visible ? <FaRegEyeSlash className='eyeIcon' onClick={toggleVisibility} /> : <FaRegEye className='eyeIcon' onClick={toggleVisibility} />;
  const InputType = visible ? "text" : "password";

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Login attempted Name:', username);
    console.log('Login attempted Password:', password);
  };

  return (
    <div className="loginform">
      <form onSubmit={handleSubmit}>
        <div className={`inputWithIcon ${username ? 'focused' : ''}`} onClick={() => focusInput(usernameInputRef)}>
         
          <input
            ref={usernameInputRef}
            className='user'
            type="text"
            placeholder={username ? '' : 'User ID'}  // Set placeholder only if username is empty
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>

        <div className={`inputWithIcon ${password ? 'focused' : ''}`} onClick={() => focusInput(passwordInputRef)}>
        
          <input
            ref={passwordInputRef}
            className='lock'
            type={InputType}
            placeholder={ password ? '' : 'Password'}   // Set placeholder only if password is empty
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {Icon}
        </div>
        <br />
        <button type="submit" className='submit'>Login</button>
        <p><hr /></p>
        <div className='button-container'>
    
    <button type='button' className='butcolor' onClick={() => alert("Your account is not valid")}>
        {/* You can add content to your button here, such as text or an icon */}
        Sign in with Google
    </button>
    {/* I'm assuming FcGoogle is an icon component */}
    <FcGoogle className='google' />
</div>

      </form>
    </div>
    
  );
};

export default Login;