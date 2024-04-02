import React from 'react'
// import BannerImage from '../assets/SeattleProject.png';
import '../styles/Home.css';
function Home() {
  return (
    <div className="home">
      <div className="text-above"> 
        <p>slogan here</p> 
      </div>
      <div className="map">
        <iframe src="https://www.google.com/maps/d/embed?mid=1yvavCfXWP546_SR677u9HK9mY1irWXJ6&ehbc=2E312F" width="1200" height="600" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title = "map of fridge locations"></iframe>
      </div>

      <div className="fridges-section">
        <h2>Fridges in Seattle</h2>
        <div className="locations-buttons">
          <button>Rainier valley</button>
          <button>University heitghs Center</button>
          <button>Woodland Park Presbyterian Church</button>
          <button>Gay City: Seattle's LGBTQ Center</button>
          <button>St. Joseph's</button>
          <button>Burien</button>
        </div>
      </div>
    </div>
  )
}

export default Home