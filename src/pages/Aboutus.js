import sanityClient from '../sanityClient';
import React, { useEffect, useState } from 'react';
import '../styles/Aboutus.css';
// import AboutImage from '../assets/images.jpg'; // Import your image here
function Aboutus() {
  const [additionalPhotos, setAdditionalPhotos] = useState([]);
  const [aboutUsTopPhoto, setAboutUsTopPhoto] = useState([]);
  const [aboutBottomText, setAboutBottomText] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "aboutPhoto"]{
        _id,
        "imageUrl": image.asset->url,
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

      sanityClient
      .fetch(`*[_type == "aboutBottomtext"]{content}`)
      .then((data) => setAboutBottomText(data[0].content))
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
      {aboutBottomText ? (
                <div>
                    {aboutBottomText.map((block, index) => (
                    <p  className='involved-text' key={index}>{block.children[0].text}</p>
                    ))}
                </div>
                ) : (
                <p>
                    Loading...
                </p>
                )}
      </div>
    </div>
  );
}

export default Aboutus;
