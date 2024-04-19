import React from 'react';
import '../styles/Aboutus.css';
import AboutImage from '../assets/images.jpg'; // Import your image here

function Aboutus() {
  return (
    <div className="about-us">
      <h2 className='about'>About Us</h2>
      <div className="about-content">
        {/* Main content */}
        <img src={AboutImage} className='about-photo' alt="About" />
        <p className='aboutText'>
          Seattle Community Fridge is a mutual-aid organization providing free 
          food and essentials to communities across the Seattle Metropolitan Area. Started in 
          2020 to target food insecurity during the pandemic, SCF is inspired by the Los Angeles 
          and New York Community Fridges
        </p>
      </div>
      <div className='how-it-started'>
        <h2 className='how'> How it started</h2>


      </div>

      {/* Additional photos */}
      <div className="additional-photos">
          <img src={AboutImage} className='photo1'/>
          <img src={AboutImage} className='photo2'/>
          <img src={AboutImage} className='photo3'/>
      </div>
      <div className='about-bottom'>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris suscipit sed risus sed scelerisque. 
        Etiam sodales maximus neque, sed ornare eros posuere porta. Nunc dapibus dui sed massa aliquet maximus. 
        Nunc elementum, erat nec suscipit varius, est est lobortis neque, in tempus erat est sit amet lacus. 
        Donec ipsum eros, vestibulum at massa ut, tempor porttitor nisl. Mauris rhoncus convallis accumsan. 
        Curabitur rutrum posuere augue, 
        quis volutpat nunc porttitor eget. Mauris rutrum arcu at ipsum iaculis pharetra. 
      </p>
      </div>
      
      
    </div>
  );
}

export default Aboutus;
