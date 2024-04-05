import React from 'react'
import '../styles/Home.css';
function Home() {
  return (
    <body>
      <div className="home">
      <div className="text-above"> 
        <p> <span>Seattle </span>free food comidas gratas 免费食物 無料の食事 ‘ai<br />
          <span>Community</span> đồ ăn miễn phí 無料の食事 đồ ăn miễn phí <br />
          <span> Fridges</span> nourriture gratuite อาหารฟรี ʻai manuahi đồ ăn
        </p> 
      </div>
      <div className="fridges-section">
        <h2>Our Fridges
        <span className='fridge-stock'>
            Click on a fridge to see its current stock.
        </span>
          </h2> 
        <div className="locations-buttons">
          <button>Rainier Valley</button>
          <button>University Heights Center</button>
          <button>Woodland Park Presbyterian Church</button>
          <button>Burien</button>
          <button>Gay City: Seattle's LGBTQ Center</button>
          <button>St. Joseph's</button>
        </div>
      </div>
      <div className="map">
        <iframe src="https://www.google.com/maps/d/embed?mid=1yvavCfXWP546_SR677u9HK9mY1irWXJ6&ehbc=2E312F" width="1200" height="600" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title = "map of fridge locations"></iframe>
      </div>
      <div className='freefood'> 
        <p className='freefood-text'>
          
        </p>
      </div>
    </div>
    </body>
  )
}

export default Home