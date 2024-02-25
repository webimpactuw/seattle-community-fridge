import React, { useState } from 'react'
import Logo from "../assets/SCFLOGO.png";
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';

import '../styles/Navbar.css';

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks)
  };


  return (
    <div className='navbar'>
      <div className='leftSide' id={openLinks ? "open" : "close"}>
          <Link to="/" >
            <div>
              <img src={Logo} alt='Logo' className='Logo'/>
            </div>
          </Link>
          <div className='hiddenLinks'>
          <Link to="/About Us">About Us</Link>
          <Link to="/GetInvolved">Get Involved</Link>
          <Link to="/Volunteer">Volunteer</Link>
          <Link to="/Contact">Contact</Link>      
        </div>
      </div>
      <div className='rightSide'>
        <Link to="/"></Link>
        <Link to="/About Us">About Us</Link>
        <Link to="/GetInvolved">Get Involved</Link>
        <Link to="/Volunteer">Volunteer</Link>
        <Link to="/Contact">Contact</Link>
        <button onClick={toggleNavbar}>
        <ReorderIcon />
        </button>
      </div>
      </div>
  );
}

export default Navbar