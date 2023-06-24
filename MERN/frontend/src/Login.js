import { useState } from 'react';
import {useDispatch} from 'react-redux';
import './design.css';
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from './config';
import  axios from 'axios';

function Login(){
    const nav = useNavigate();
    const dispatch = useDispatch();
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const login=(event)=>{
        event.preventDefault();
        const requestData = {username,password};
        axios.post(`${API_BASE_URL}/login`,requestData)
        .then((result)=>{
            if(result.status==200){
                localStorage.setItem("token",result.data.result.token);
                localStorage.setItem("user",JSON.stringify(result.data.result.user));
                dispatch({
                    type:'LOGIN_SUCCESS',
                    payload:result.data.result.user
                });



                nav("/notes");
                setUsername('');
                setPassword('');

            }
        })
        .catch((error)=>{
            console.log(error);
          })
    }
    return(
        <div>
            <nav>
        Login
      </nav>
      <div className = 'row'>
        <div className='col-1'>

        </div>
        <div className='col-5 left'>
         
        </div>
        <div className='col-4'>
            <form onSubmit= {(e)=>login(e)}>
                <input type='text' placeholder='Username' id='username' value={username} onChange={(ev)=> setUsername(ev.target.value)}></input>
                <input type='password' placeholder='Password' value={password} onChange={(ev)=> setPassword(ev.target.value)}></input>
                <button type='submit' className='login'>Login</button>
            </form>

        </div>
        <div className='col-2'>

        </div>
      </div>

        </div>
    )
}
export default Login;