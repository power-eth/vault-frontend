import React, { useState } from "react";


const AuthButton = ({ isLoggedIn, setIsLoggedIn }) => {

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  if (isLoggedIn === true) {
    return (
      <div className='button-container'>
        <button className='random-btn' onClick={handleLogout}>Logout</button>
      </div>
    
  )} else {
    return (
    <div className='button-container'>
      <button className='random-btn' onClick={handleLogin}>Login</button>
    </div>
    )}
};

export default AuthButton;