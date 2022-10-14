import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

 function Navbar() {
  return (
    <>
    <div className='navbar'>
       <Link to="/question" className='link'>
     <h2>Questions</h2> 
     </Link>
     <Link to="/axiosandfetch" className='link'>
     <h2>Axios and fetch</h2>      
     </Link>
     <Link to="/usestate" className='link'>
     <h2>UseState</h2>
     </Link>
     <Link to="/useEffect" className='link'>
     <h2>UseEffect</h2>
     </Link>
     <Link to="/usereducer" className='link'>
     <h2>UseReducer</h2>
     </Link>
     <Link to="/usememo" className='link'>
     <h2>UseMemo</h2>
     </Link>
     <Link to="/useref" className='link'>
     <h2>UseRef</h2>
     </Link>
     <Link to="/Routing" className='link'>
     <h2>Routing</h2>
     </Link>
    </div>
    </>
  )
}
export default Navbar;