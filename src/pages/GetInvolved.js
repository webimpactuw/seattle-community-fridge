import React from 'react'
import '../styles/GetInvolved.css';
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
    return (
        <div className="get-involved">

            <h2>Get Involved!</h2>
            <p className='involved-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris suscipit sed risus sed scelerisque. 
            Etiam sodales maximus neque, sed ornare eros posuere porta. Nunc dapibus dui sed massa aliquet m
            </p>
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
                <p className='small-paragraph'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
                <p className='small-paragraph'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
                <p className='small-paragraph'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
            </div>
            <div className="options">
                <a href='https://docs.google.com/forms/d/e/1FAIpQLSeeqreEHNOWvY3s3I6FYcyH79uJAwDObbx8RJqBMBcCvnUl3w/viewform' target='_blank'> 
                    <button className="get-involved-button">Donate Now </button>
                </a>
                <button className="get-involved-button">Host Now</button>
                <button className="get-involved-button">Donate Now</button>
            </div>

            <h2>Open Roles</h2>
            <div className='open-text'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris suscipit sed risus sed scelerisque. 
                    Etiam sodales maximus neque, sed ornare eros posuere porta. Nunc dapibus dui sed massa aliquet m
                </p>
            </div>
            <div className='container'>
                <img src={FoodPickup} className='pickup-photo' alt='pickup'/>
                <div className='food-pickup'>
                    <h2>Food Donation Pick-ups</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                    <button className='apply'>
                        Apply
                    </button>
                </div>
            </div>

            <div className='container'>
                <div className='food-pickup'>
                    <h2>Fridge Cleaning</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
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
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                    <button className='apply'>
                        Apply
                    </button>
                </div>
            </div>

            <div className='container'>
                <div className='food-pickup'>
                    <h2>Host/Food Donor Outreach</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
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
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                    <button className='apply'>
                        Apply
                    </button>
                </div>
            </div>

            <div className='container'>
                <div className='food-pickup'>
                    <h2>Social Media Manager</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
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