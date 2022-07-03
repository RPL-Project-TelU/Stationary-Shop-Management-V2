import './Login.css';
import { useState } from 'react';
import {auth} from './Firebase'
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
    <div className="div">
      <h1 className="h1">Sign-in</h1>
      <label className="label">Email</label>
      <input onChange={(event=>setEmail(event.target.value))} autoComplete="off" className="input" type="email" name="email" />
      <label>Password</label>
      <input onChange={(event=>setPassword(event.target.value))} autoComplete="off" className="input" type="password" name="password" />
      <button onClick={signIn} className="button">Sign</button>
      <button onClick={register} className="button">Create your account</button>

    </div>
  );
}

export default Login;
