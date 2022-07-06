import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from '../Firebase';
import BannerImage from '../assets/shopImage.jpg';
import BannerImage2 from '../assets/shop.jpg';

import '../styles/components/Home.css'

const Home = () => {
  //code login
  const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
    const signOutClick = () =>{
      <div className="Sign-out">
      auth.signOut(); 
      navigate('/')
      <Link to ="/">
        <button onClick={signOutClick}>Sign-out</button>
      </Link>
      </div>
        
    } //code login
  const [openLinks, setOpenLinks] = useState(false);

  const toggleHome = () => {
        setOpenLinks(!openLinks);
  };
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})` }} >
      <div className='headerContainer' style={{ backgroundImage: `url(${BannerImage2})` }}>
        <h1 className="border-dark">WELCOME TO STATIONARY SHOP</h1>
        <div className="logOutContainer">
        <Link to="/">
           <button className="ButtonSignOut" onClick={toggleHome}>Signout</button>
        </Link>
      </div>
      </div>
    </div>
  );
}

export default Home
