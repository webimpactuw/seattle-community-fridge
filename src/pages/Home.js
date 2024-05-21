import '../styles/Home.css';
import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import sanityClient from '../sanityClient';

function Home() {
  const [homeFood, sethomeFood] = useState(null);
  const [getText, setgetText] = useState(null);

  useEffect(() => {
    sanityClient
    .fetch(`*[_type == "homefood"]{content}`)
    .then((data) => sethomeFood(data[0].content))
    .catch(console.error);

    sanityClient
    .fetch(`*[_type == "getinvolved"]{content}`)
    .then((data) => setgetText(data[0].content))
    .catch(console.error);
  }, []);


  return (
    <body className='homePage'>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <div className='home'>
        <div className="text-container">
          <div className="text-above">
            <p>
              <span>Seattle</span> free food comidas gratas 免费食物 無料の食事 ‘ai<br/>
              <span>Community</span> đồ ăn miễn phí 無料の食事 đồ ăn miễn phí <br />
              <span> Fridges</span> nourriture gratuite อาหารฟรี ʻai manuahi đồ ăn
            </p>
            <hr className='text-above-line'/>
          </div>
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
          <iframe className='map-info' src="https://www.google.com/maps/d/embed?mid=1yvavCfXWP546_SR677u9HK9mY1irWXJ6&ehbc=2E312F" width="1200" height="600" style={{border: 2}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="map of fridge locations"></iframe>
        </div>
        <div className='free-food'>
          <h2>Free Food
            <span className='free-food-header'>
            Take what you need, give what you can.
            </span>
          </h2>
          <hr className='food-line'/>
          {homeFood ? (
                <div>
                    {homeFood.map((block, index) => (
                    <p  className='free-food-text' key={index}>{block.children[0].text}</p>
                    ))}
                </div>
                ) : (
                <p>
                    Loading...
                </p>
                )}
        </div>
        <div className='get-involved'>
          <h2 className='get-h2'>Get Involved
            <span className='get-involved-header'>
              SCF is made possible by you.
            </span>
          </h2>
          <hr className='get-line'/>
          {getText ? (
                <div>
                    {getText.map((block, index) => (
                    <p  className='get-involved-text' key={index}>{block.children[0].text}</p>
                    ))}
                </div>
                ) : (
                <p>
                    Loading...
                </p>
                )}
        </div>
      </div>
      <Footer />
    </body>
  );
}

export default Home;
