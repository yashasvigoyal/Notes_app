import './design.css';
import './notes.css';
import {Link} from 'react-router-dom';
import { useState ,useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from './config';
import  axios from 'axios';
import { useDispatch, useSelector } from "react-redux";


function Addnotes(){
  const [note,setNote] = useState([]);
  const {loading , error , data} = useSelector(state=>state.noteReducer);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const url = 'http://localhost:4000/allnotes';
  useEffect(() => {
    getNotes();
}, []);
useEffect(() => {
  setNote(data);
}, [data]);
  const getNotes = async () => {
    const resp = await axios.get(url);
    setNote(resp.data);
    nav("/notes");
    // axios.get(url)
    //     .then(resp => setUsers(resp.data))
    //     .catch(error => console.log(error))
  }
 


const handleSubmit = (e) => {
  e.preventDefault();
  const reqData = {note:note};
  axios.post(`${API_BASE_URL}/addnotes`,reqData)
      .then((result) => {
        nav("/notes")
      })
      .catch(error => console.log("Error Occured", error))
}





const logout = ()=>{
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  dispatch({
    type:"LOGIN_ERROR"
  });
  nav("/login");
}

    return(
        <div>
      <nav>
        Welcome, User
        <a href="/logout" className='logout' onClick={logout}>Logout</a>
      </nav>
      <div className = 'row'>
        <div className='col-4 leftnote'>
          Add My Note
          <input type='text' placeholder='Type message here...' className='message' value={note} onChange={(ev)=> setNote(ev.target.value)}></input>
          <button type = 'submit' className='save' onClick={handleSubmit} >Save</button>
         

        </div>
        <div className='col-8 notes'>
          <span className='allnotes'>All Notes
            </span>
            {note?<>
              <p className='newnote'> Go to college</p>
              <p className='newnote'> Go to college</p>
              <p className='newnote'> Go to college</p>
              <p className='newnote'> Go to college</p>
              </>:''}
              
        
            

        </div>
      </div>

        </div>
    )
}
export default Addnotes;