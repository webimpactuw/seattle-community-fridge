import React from 'react'
import BannerImage from '../assets/SeattleProject.png';
import '../styles/Home.css';
function Home() {
  return (
    <div className='home'>
      <div className='headerContainer' style={{ backgroundImage: `url(${BannerImage})` }}>
        <h1>Seattle Community Fridge</h1>
        <p>🍅 free food for the community</p>
      </div>
    </div>
  )
}

export default Home