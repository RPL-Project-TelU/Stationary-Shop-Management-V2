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
        <Link to="/Menu">
           <div className='Home-Features'>
              <button onClick={toggleHome}>Sale-Entry</button>
              <button onClick={toggleHome}>Damage-Entry</button>
              <button onClick={toggleHome}>Purchase-Entry</button>
              <button onClick={toggleHome}>-Setup</button>
              <button onClick={toggleHome}>View</button>
              <Link to="/Calculator">
                  <button onClick={toggleHome}>Calculator</button>
              </Link> 
           </div>
        </Link>
        <Link to="/Member">
          <div className="MemberYPR"></div>
        </Link>
        {/* <Link to="/">
           <button onClick={toggleHome}>Signout</button>
        </Link> */}
      </div>
      <div className="logOutContainer">
        <Link to="/">
           <button onClick={toggleHome}>Signout</button>
        </Link>
      </div>
    </div>
  );
}

export default Home
