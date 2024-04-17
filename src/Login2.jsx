import React, { useState, useRef } from 'react';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login2 = () => {
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
    <div className="min-h-screen flex justify-center items-center bg-cover" style={{ backgroundImage: "url(https://i.imgur.com/sMuo4QT.jpeg)" }}>
      <form className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg transition-transform hover:translate-y-[-5px]" onSubmit={handleSubmit}>
        <div className={`relative mb-4 ${username ? 'focused' : ''}`} onClick={() => focusInput(usernameInputRef)}>
          <input
            ref={usernameInputRef}
            className='inputWithIcon appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            type="text"
            placeholder={username ? '' : 'User ID'}
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>

        <div className={`relative mb-4 ${password ? 'focused' : ''}`} onClick={() => focusInput(passwordInputRef)}>
          <input
            ref={passwordInputRef}
            className='inputWithIcon appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            type={InputType}
            placeholder={password ? '' : 'Password'}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {Icon}
        </div>

        <button type="submit" className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Login</button>
        <hr className="my-4" />
        <div className='flex items-center'>
          <button type='button' className='flex items-center bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={() => alert("Your account is not valid")}>
            Sign in with Google
            <FcGoogle className='ml-2' />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login2;