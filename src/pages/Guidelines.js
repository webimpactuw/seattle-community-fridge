import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../styles/Guidelines.css';
import PPF from '../assets/mitten.png';
import Fridge from '../assets/fridge-opening.png';
import Apron from '../assets/apron.png';
import Weights from '../assets/weights.png';

function Guidelines() {
    const navigate = useNavigate();  

    return (
        <div className="guidelines-container">
            <h2>Hygiene Guidelines</h2>
            <p>Seattle Community Fridges follows science and the guidance of the Center for Disease Control (CDC) and King County Public Health for safety, hygiene, and COVID-19 testing. The guidance here provides quick and easy directions for the best ways to stay safe but for the best and most up to date information, use the included CDC and King County Public Health links.</p>
            <div className="guidelines-icons">
                <div className="guideline">
                    <img src={PPF} alt="PPE Guidelines" />
                    <h3>PPE Guidelines</h3>
                    <button onClick={() => navigate('/PPEGuidelines')}>Learn More</button>  {/* Use navigate on click */}
                </div>
                <div className="guideline">
                    <img src={Fridge} alt="Fridge Guidelines" />
                    <h3>Fridge Guidelines</h3>
                    <button onClick={() => navigate('/FridgeGuidelines')}>Learn More</button>
                </div>
                <div className="guideline">
                    <img src={Apron} alt="Volunteer Guidelines" />
                    <h3>Volunteer Guidelines</h3>
                    <button onClick={() => navigate('/VolunteerGuidelines')}>Learn More</button>
                </div>
                <div className="guideline">
                    <img src={Weights} alt="Heavy Lifting Guidelines" />
                    <h3>Heavy Lifting Guidelines</h3>
                    <button onClick={() => navigate('/VolunteerGuidelines')}>Learn More</button>
                </div>
            </div>
        </div>
    );
}

export default Guidelines;