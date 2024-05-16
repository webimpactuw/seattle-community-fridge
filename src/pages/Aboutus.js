import sanityClient from '../sanityClient';
import React, { useEffect, useState } from 'react';
import '../styles/Aboutus.css';
import AboutImage from '../assets/images.jpg'; // Import your image here
function Aboutus() {
  const [additionalPhotos, setAdditionalPhotos] = useState([]);
  const [aboutUsTopPhoto, setAboutUsTopPhoto] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "aboutPhoto"]{
        _id,
        "imageUrl": image.asset->url
      }`)
      .then((data) => setAdditionalPhotos(data))
      .catch(console.error);

    sanityClient
      .fetch(`*[_type == "aboutUsTopPhoto"]{
        _id,
        "imageUrl": image.asset->url
      }`)
      .then((data) => setAboutUsTopPhoto(data))
      .catch(console.error);
  }, []);

  return (
    <div className="about-us">
      <h2 className='about'>About Us</h2>
      <div className="about-content">
        {/* Render top row photo */}
        {aboutUsTopPhoto.map((photo) => (
          <img key={photo._id} src={photo.imageUrl} className='about-photo' alt="About" />
        ))}
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
        {additionalPhotos.length > 0 && (
          <img src={additionalPhotos[0].imageUrl} className='additional-photo' alt="Additional" />
        )}
        {additionalPhotos.map((photo) => (
          <img key={photo._id} src={photo.imageUrl} className='additional-photo' alt="Additional" />
                  ))}
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
