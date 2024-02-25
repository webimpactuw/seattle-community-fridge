import React from 'react'
import '../styles/Aboutus.css';
// import BannerImage from '../assets/SeattleProject.png';

function Aboutus() {
  return (
    <div className='about'>
      <div className='headerContainer'>
        <h2>
          About Us
        </h2>
        <p className='aboutText'>
        Seattle Community Fridge is a mutual-aid organization providing free 
        food and essentials to communities across the Seattle Metropolitan Area. Started in 
        2020 to target food insecurity during the pandemic, SCF is inspired by the Los Angeles 
        and New York Community Fridges
        </p>
        <button>
          Get Involved
        </button>
        <a href="https://account.venmo.com/u/seattlecommunityfridge" target="_blank" rel="noreferrer">
        <button>Donate here</button>
        </a>
        <button>
          See Fridges
        </button>
      </div>
    </div>
  )
}

export default Aboutus