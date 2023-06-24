import Signup from './Signup';
import './design.css';
import Login from './Login';

import {Link,useNavigate,NavLink,BrowserRouter,Route,Routes} from 'react-router-dom';
import Addnotes from './Addnotes';
import Homepage from './Homepage';



function App() {
 
  return (
 
        <div className="App">
       
        <Routes>
          <Route path="/" element = {<Homepage/>}/>
          <Route path="/signup" element = {<Signup/>}/>
          <Route path="/login" element = {<Login/>}/>
          <Route path="/notes" element = {<Addnotes/>}/>
        </Routes>
     
    </div>
  );
}

export default App;
