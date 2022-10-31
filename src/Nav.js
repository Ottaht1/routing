import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';


function Nav() {
  return (
   <nav>
    <h3>Logo</h3>
    <ul className='nav-links'>
        <Link to= '/users'>
        <li>Users</li>
        </Link>
        <Link to= '/notfound'>
        <li>NotFound</li>
        </Link>
        <Link to= '/error'>
        <li>Error</li>
        </Link>
    </ul>
   </nav>
  );
}

export default Nav;