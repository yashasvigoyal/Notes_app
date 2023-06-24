import Signup from './Signup';
import './design.css';
import Login from './Login';

import {Link,useNavigate,NavLink,BrowserRouter,Route,Routes} from 'react-router-dom';
import Addnotes from './Addnotes';
function Homepage(){
    return(
        <div>
        <nav>
        Welcome!!!!
      </nav>
      <div className = 'row'>
        
        <div className='col-5 left'>
          

        </div>
        <div className='col-5'>
          <div className='box1'></div>
          <div className='box2'></div>
          <div className='welcome'>
          Welcome
          </div> 
          
          <Link to='/signup' className='links'>Register</Link>
          <Link to='./login' className='links'>Login</Link>
          

        </div>
       
      </div>
    </div>
    )
}
export default Homepage;