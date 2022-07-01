import '../App.css';
import '../Login/Login.css'
import { useState } from 'react';
import {auth} from '../Firebase'
import { useNavigate } from 'react-router-dom'
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 

  const signIn = ()=>{
    signInWithEmailAndPassword(auth, email, password)
    .then(auth=>{navigate('/home')})
    .catch(error=>console.error(error))
  }

  const register = ()=>{
    createUserWithEmailAndPassword(auth, email, password)
    .then(auth=>{navigate('/home')})
    .catch(error=>console.error(error))
  }
   
  return (
    <div className="login-page">
      <h1 className="display">Sign-in</h1>
      <div className='LoginPass'>
      <label className="LoginEmail01">Email</label>
        <input onChange={(event=>setEmail(event.target.value))} autoComplete="off" className="input" type="email" name="email" />
      <label className='LoginPassword01'>Password</label>
        <input onChange={(event=>setPassword(event.target.value))} autoComplete="off" className="input" type="password" name="password" />
        <button className='loginB' onClick={signIn}>Sign</button>
        <button className="buttonCreate" onClick={register}>Create your account</button>
      </div>
     

    </div>
  );
}

export default Login;
