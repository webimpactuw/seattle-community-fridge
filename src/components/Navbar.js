import React from 'react'
import Logo from "../assets/SCFLOGO.png";
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';
function Navbar() {
  return (
    <div className='navbar'>
      <div className='leftSide'>
        <img src={Logo} />
      </div>
      <div className='rightSide'>
        <Link to="/">Home</Link>
        <Link to="/Volunteer">Volunteer</Link>
        <Link to="/GetInvolved">Get Involved</Link>
        <Link to="/Fridges">Fridges</Link>
        <Link to="/About Us">About Us</Link>
        <Link to="/Donate">Donate</Link>
        <button>
        <ReorderIcon />
        </button>
      </div>
      </div>
  );
}

export default Navbar