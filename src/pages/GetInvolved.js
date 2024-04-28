import React from 'react'
import '../styles/GetInvolved.css';
import FridgeDonationImage from '../assets/fridge-donation.png';
import FridgeHostingImage from '../assets/fridge-hosting.png';
import FoodDonationImage from '../assets/food-donation.png';

function GetInvolved() {
    return (
        <div className="get-involved">
            <h2>Get Involved!</h2>
            <p className='involved-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris suscipit sed risus sed scelerisque. 
            Etiam sodales maximus neque, sed ornare eros posuere porta. Nunc dapibus dui sed massa aliquet m
            </p>
            <div className='top-row-photos'> 
                <img src={FridgeDonationImage} className='involved-photo'/>
                <img src={FridgeHostingImage} className='involved-photo'/>
                <img src={FoodDonationImage} className='involved-photo'/>

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
                <button className="get-involved-button">Donate Now</button>
                <button className="get-involved-button">Host Now</button>
                <button className="get-involved-button">Donate Now</button>
            </div>

            <h2>Open Roles</h2>
            <div>
                <p className='open-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris suscipit sed risus sed scelerisque. 
                    Etiam sodales maximus neque, sed ornare eros posuere porta. Nunc dapibus dui sed massa aliquet m
                </p>
            </div>
            <img src={FoodDonationImage} className='involved-photo'/>




            
        </div>
      )
}
    

export default GetInvolved