import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import UsersCollection from './components/UsersCollection/UsersCollection';
import About from './components/About/About';
import './App.css';
import Footer from './components/Footer/Footer';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="container">
      <Navbar
      isLoggedIn={isLoggedIn}
      setIsLoggedIn = {setIsLoggedIn}
      />

      <Header />
      <UsersCollection
      isLoggedIn={isLoggedIn}
      />
      <About/> 
      <Footer/>
    </div>
  );
}

export default App;
