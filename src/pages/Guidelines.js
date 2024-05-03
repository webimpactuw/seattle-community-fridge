import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../styles/Guidelines.css';
import fridge from '../assets/fridge-donation.png';
// need to put the other imports here for the right pictures then change the existing ones

function Guidelines() {
    const navigate = useNavigate();  

    return (
        <div className="guidelines-container">
            <h2>Hygiene Guidelines</h2>
            <p>Seattle Community Fridges follows science and the guidance of the Center for Disease Control (CDC) and King County Public Health for safety, hygiene, and COVID-19 testing. The guidance here provides quick and easy directions for the best ways to stay safe but for the best and most up to date information, use the included CDC and King County Public Health links.</p>
            <div className="guidelines-icons">
                <div className="guideline">
                    <img src={fridge} alt="PPE Guidelines" />
                    <h3>PPE Guidelines</h3>
                    <button onClick={() => navigate('/PPEGuidelines')}>Learn More</button>  {/* Use navigate on click */}
                </div>
                <div className="guideline">
                    <img src={fridge} alt="Fridge Guidelines" />
                    <h3>Fridge Guidelines</h3>
                    <button>Learn More</button>
                </div>
                <div className="guideline">
                    <img src={fridge} alt="Volunteer Guidelines" />
                    <h3>Volunteer Guidelines</h3>
                    <button>Learn More</button>
                </div>
                <div className="guideline">
                    <img src={fridge} alt="Heavy Lifting Guidelines" />
                    <h3>Heavy Lifting Guidelines</h3>
                    <button>Learn More</button>
                </div>
            </div>
        </div>
    );
}

export default Guidelines;