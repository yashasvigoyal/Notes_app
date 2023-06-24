import './design.css';
import { API_BASE_URL } from './config';
import { useNavigate } from "react-router-dom";
import  axios from 'axios';
import React, { useState } from 'react';
function Signup(){
  const nav = useNavigate();
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const signup = (event)=>{
    event.preventDefault();
    const requestData = {username:username,email:email,password:password}
    axios.post(`${API_BASE_URL}/signup`,requestData)
    .then((result)=>{
      if(result.status==201){
        alert("User registered successfully!!");
        nav("/login");
       
      } 
    })
    .catch((error)=>{
      console.log(error);
    })
    setEmail('');
    setPassword('');
    setUsername('');

  }
  
    return(
        <div>
            <nav>
       Register
      </nav>
      <div className = 'row'>

        <div className='col-5 left'>

        </div>
        <div className='col-5'>
            <form onSubmit= {(e)=>signup(e)}>
                <input type='text' placeholder='Username' id='username' value={username} onChange={(ev)=> setUsername(ev.target.value)}></input>
                <input type='text' placeholder='Email' id='email' value={email} onChange={(ev)=> setEmail(ev.target.value)}></input>
                <input type='password' placeholder='Password' id='password' value={password} onChange={(ev)=> setPassword(ev.target.value)}></input>
                <button type='submit' className='signup'>SignUp</button>
            </form>

        </div>
        <div className='col-2'>

        </div>
      </div>

        </div>
    )
}
export default Signup;