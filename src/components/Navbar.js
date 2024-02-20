import React, {useState} from 'react'
import Logo from "../assets/SCFLOGO.png";
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';

function Navbar() {

  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className='navbar'>
      <div className='leftSide' id={openLinks ? "open" : "close"}>
        <img src={Logo} />
      <div className='hiddenLinks'>
        <Link to="/">Home</Link>
        <Link to="/About Us">About Us</Link>
        <Link to="/GetInvolved">Get Involved</Link>
        <Link to="/Volunteer">Volunteer</Link>
        <Link to="/GetInvolved">Contact Us</Link>
      </div>
      </div>
      <div className='rightSide'>
        <Link to="/">Home</Link>
        <Link to="/Volunteer">Volunteer</Link>
        <Link to="/GetInvolved">Get Involved</Link>
        <Link to="/Fridges">Fridges</Link>
        <Link to="/About Us">About Us</Link>
        <Link to="/Donate">Donate</Link>
        <button onClick={toggleNavbar}>
        <ReorderIcon />
        </button>
      </div>
      </div>
  );
}

export default Navbar