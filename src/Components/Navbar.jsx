import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

 function Navbar() {
  return (
    <div className='navbar'>
     <Link to="/usestate" className='link'>
     <h2>UseState Hook </h2>
     </Link>

     <Link to="/question" className='link'>
     <h2>Questions</h2> 
     </Link>

     <Link to="/contact" className='link'>
     <h2>Contact Us</h2>      
     </Link>
    </div>
    
  )
}
export default Navbar;