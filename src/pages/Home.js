import React from 'react'
import '../styles/Home.css';
function Home() {
  return (
    <body>
      <div className="home">
      <div className="text-above"> 
        <p><span>Seattle</span> free food comidas gratas 免费食物 無料の食事 ‘ai<br/>
          <span>Community     </span> đồ ăn miễn phí 無料の食事 đồ ăn miễn phí <br />
          <span> Fridges</span> nourriture gratuite อาหารฟรี ʻai manuahi đồ ăn
        </p> 
        <hr className='text-above-line'/>
        
      </div>
      <div className="fridges-section">
        <h2>Our Fridges
          
        <span className='fridge-stock'>
            Click on a fridge to see its current stock.
        </span>
          </h2> 
          <hr className='our-fridges-line'/>
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
      <div className='free-food'> 
      <h2>Free Food</h2>
        <p className='freefood-text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris suscipit sed risus sed scelerisque. Etiam sodales maximus neque, sed ornare eros posuere porta. Nunc dapibus dui sed massa aliquet maximus. 
          Nunc elementum, erat nec suscipit varius, est est lobortis neque, in tempus erat est sit amet lacus. Donec ipsum eros, vestibulum at massa ut, tempor porttitor nisl. Mauris rhoncus convallis accumsan. 
          Curabitur rutrum posuere augue, quis volutpat nunc porttitor eget. Mauris rutrum arcu at ipsum iaculis pharetra. 
        </p>
      </div>

      <div className='get-involved'>
        <h2>Get Involved</h2>
        <p className='get-involved-text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris suscipit sed risus sed scelerisque. Etiam sodales maximus neque, sed ornare eros posuere porta. Nunc dapibus dui sed massa aliquet maximus. 
          Nunc elementum, erat nec suscipit varius, est est lobortis neque, in tempus erat est sit amet lacus. Donec ipsum eros, vestibulum at massa ut, tempor porttitor nisl. Mauris rhoncus convallis accumsan. 
          Curabitur rutrum posuere augue, quis volutpat nunc porttitor eget. Mauris rutrum arcu at ipsum iaculis pharetra.
        </p>
      </div>
    </div>
    </body>
  )
}

export default Home