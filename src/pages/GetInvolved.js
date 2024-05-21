import React, { useState, useEffect } from 'react';
import '../styles/GetInvolved.css';
import sanityClient from '../sanityClient';
import FridgeDonationImage from '../assets/fridge-donation.png';
import FridgeHostingImage from '../assets/fridge-hosting.png';
import FoodDonationImage from '../assets/food-donation.png';
import FoodPickup from '../assets/foodPickups.png';
import CleaningBottle from '../assets/cleaningBottle.png';
import Hammer from '../assets/hammer.png';
import AppleCart from '../assets/appleCart.png';
import Apron from '../assets/apron.png';
import Social from '../assets/insta.png';

function GetInvolved() {
    const [foodPickupContent, setFoodPickupContent] = useState(null);
    const [involvedTopText, setInvolvedTopText] = useState(null);
    const [openRolesText, setOpenRolesText] = useState(null);
    const [fridgeCleaningDesc, setFridgeCleaningDesc] = useState(null);
    const [shelterBuldingContent, setShelterBuldingContent] = useState(null);
    const [foodHost, setFoodHost] = useState(null);
    const [volunteerCoordin, setVolunteerCoordin] = useState(null);
    const [socialMedia, setSocialMedia] = useState(null);
    const [fridge, setfridge] = useState(null);
    const [donate, setDonate] = useState(null);
    const [fridgeDonate, setfridgeDonate] = useState(null);


    useEffect(() => {
        sanityClient
        .fetch(`*[_type == "fridgeDonate"]{content}`)
        .then((data) => setfridgeDonate(data[0].content))
        .catch(console.error);

        sanityClient
        .fetch(`*[_type == "fridgeHost"]{content}`)
        .then((data) => setfridge(data[0].content))
        .catch(console.error);

        sanityClient
        .fetch(`*[_type == "foodDonate"]{content}`)
        .then((data) => setDonate(data[0].content))
        .catch(console.error);

      sanityClient
        .fetch(`*[_type == "foodDonationPickupDesc"]{content}`)
        .then((data) => setFoodPickupContent(data[0].content))
        .catch(console.error);
  
      sanityClient
        .fetch(`*[_type == "involved"]{content}`)
        .then((data) => setInvolvedTopText(data[0].content))
        .catch(console.error);
  
      sanityClient
        .fetch(`*[_type == "opentext"]{content}`)
        .then((data) => setOpenRolesText(data[0].content))
        .catch(console.error);
  
      sanityClient
        .fetch(`*[_type == "descriptionclean"]{content}`)
        .then((data) => setFridgeCleaningDesc(data[0].content))
        .catch(console.error);

        sanityClient
        .fetch(`*[_type == "descriptionbuild"]{content}`)
        .then((data) => setShelterBuldingContent(data[0].content))
        .catch(console.error);

        sanityClient
        .fetch(`*[_type == "descriptionhost"]{content}`)
        .then((data) => setFoodHost(data[0].content))
        .catch(console.error);
        
        sanityClient
        .fetch(`*[_type == "descriptionVolunteer"]{content}`)
        .then((data) => setVolunteerCoordin(data[0].content))
        .catch(console.error);

        sanityClient
        .fetch(`*[_type == "descriptionSocialMedia"]{content}`)
        .then((data) => setSocialMedia(data[0].content))
        .catch(console.error);



    }, []);
    return (
        <div className="get-involved">

            <h2>Get Involved!</h2>
            <div >
                {involvedTopText ? (
                <div>
                    {involvedTopText.map((block, index) => (
                    <p  className='involved-text' key={index}>{block.children[0].text}</p>
                    ))}
                </div>
                ) : (
                <p>
                    Loading...
                </p>
                )}
            </div>
            <div className='top-row-photos'> 
                <img src={FridgeDonationImage} className='involved-photo' alt='fridge'/>
                <img src={FridgeHostingImage} className='involved-photo' alt='fridge'/>
                <img src={FoodDonationImage} className='involved-photo' alt='fridge'/>

            </div>

            <div className='picture-captions'>
                <p>
                    Fridge Donation
                </p>

                <p>
                    Fridge Hosting
                </p>

                <p>
                    Food Donation 
                </p>
            </div>
            <div className='row-text'>
                {fridgeDonate ? (
                    <div>
                        {fridgeDonate.map((block, index) => (
                        <p  className='small-paragraph' key={index}>{block.children[0].text}</p>
                        ))}
                    </div>
                    ) : (
                    <p>
                        Loading...
                    </p>
                )}
                {/* <p className='small-paragraph'>
                    This form is to compile a list of our fridge donors to be taken to hosts as they come up.  
                </p> */}
                {fridge ? (
                <div>
                    {fridge.map((block, index) => (
                    <p  className='small-paragraph' key={index}>{block.children[0].text}</p>
                    ))}
                </div>
                ) : (
                <p>
                    Loading...
                </p>
                )}
                {donate ? (
                    <div>
                        {donate.map((block, index) => (
                        <p  className='small-paragraph' key={index}>{block.children[0].text}</p>
                        ))}
                    </div>
                    ) : (
                    <p>
                        Loading...
                    </p>
                )}
            </div>
            <div className="options">
                <a href='https://docs.google.com/forms/d/e/1FAIpQLSeeqreEHNOWvY3s3I6FYcyH79uJAwDObbx8RJqBMBcCvnUl3w/viewform' target='_blank'> 
                    <button className="get-involved-button">Donate Now </button>
                </a>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdJO3rbuBtQ6Lw2Ppc0gIEGp0hEXBmmvGmAomK3o034P30o2A/viewform" target='_blank'>
                <button className="get-involved-button">Host Now</button>
                </a>
                
                <button className="get-involved-button">Donate Now</button>
            </div>

            <h2>Open Roles</h2>
            <div className='open-text'>
                {openRolesText ? (
                <div>
                    {openRolesText.map((block, index) => (
                    <p key={index}>{block.children[0].text}</p>
                    ))}
                </div>
                ) : (
                <p>
                    Loading...
                </p>
                )}
            </div>
            <div className='container'>
        <img src={FoodPickup} className='pickup-photo' alt='pickup'/>
        <div className='food-pickup'>
          <h2>Food Donation Pick-ups</h2>
          {foodPickupContent ? (
            <div>
              {foodPickupContent.map((block, index) => (
                <p key={index}>{block.children[0].text}</p>
              ))}
            </div>
          ) : (
            <p>
              Loading...
            </p>
          )}
          <button className='apply'>Apply</button>
        </div>
      </div>

            <div className='container'>
                <div className='food-pickup'>
                    <h2>Fridge Cleaning</h2>
                    {fridgeCleaningDesc ? (
                        <div>
                            {fridgeCleaningDesc.map((block, index) => (
                            <p key={index}>{block.children[0].text}</p>
                            ))}
                        </div>
                        ) : (
                        <p>
                            Loading...
                        </p>
                        )}
                    <button className='apply'>
                        Apply
                    </button>
                </div>
                <img src={CleaningBottle} className='pickup-photo'/>
            </div>

            <div className='container'>
                <img src={Hammer} className='pickup-photo'/>
                <div className='food-pickup'>
                    <h2>Shelter Building + Fridge Transport</h2>
                    {shelterBuldingContent ? (
                    <div>
                        {shelterBuldingContent.map((block, index) => (
                        <p key={index}>{block.children[0].text}</p>
                        ))}
                    </div>
                    ) : (
                    <p>
                        Loading...
                    </p>
                    )}
                    <button className='apply'>
                        Apply
                    </button>
                </div>
            </div>

            <div className='container'>
                <div className='food-pickup'>
                    <h2>Host/Food Donor Outreach</h2>
                    {foodHost ? (
                    <div>
                        {foodHost.map((block, index) => (
                        <p key={index}>{block.children[0].text}</p>
                        ))}
                    </div>
                    ) : (
                    <p>
                        Loading...
                    </p>
                    )}
                    <button className='apply'>
                        Apply
                    </button>
                </div>
                <img src={AppleCart} className='pickup-photo'/>
            </div>

            <div className='container'>
                <img src={Apron} className='pickup-photo'/>
                <div className='food-pickup'>
                    <h2>Volunteer Coordinator</h2>
                    {volunteerCoordin ? (
                    <div>
                        {volunteerCoordin.map((block, index) => (
                        <p key={index}>{block.children[0].text}</p>
                        ))}
                    </div>
                    ) : (
                    <p>
                        Loading...
                    </p>
                    )}
                    <button className='apply'>
                        Apply
                    </button>
                </div>
            </div>

            <div className='container'>
                <div className='food-pickup'>
                    <h2>Social Media Manager</h2>
                    {socialMedia ? (
                    <div>
                        {socialMedia.map((block, index) => (
                        <p key={index}>{block.children[0].text}</p>
                        ))}
                    </div>
                    ) : (
                    <p>
                        Loading...
                    </p>
                    )}
                    <button className='apply'>
                        Apply
                    </button>
                </div>
                <img src={Social} className='pickup-photo'/>
            </div>
        </div>
    )
}
    

export default GetInvolved