import React from 'react';
import '../styles/FridgeGuidelines.css';

function FridgeGuidelines() {
  return (
    <div className="fridge-container">
      <h1>Fridge Guidelines</h1>
      <ul className="guidelines">
        <li>When available, <span style={{  color: 'orange' }}> should be stocked with sanitizing wipes,
            hand towels, cleaning solution, sanitizing solution, and gloves. </span>
        </li>
        <li>If possible, <span style={{ color: 'orange' }}>maintain clear signage at each fridge 
            encouraging people to socially distance, sanitize, and use PPE.</span>
        </li>
        <li>If PPE is available at fridge, have signs on door that reads: 
            “Please apply hand sanitizer before handling fridge and food,”
             and “Please take a pair of gloves before handling fridge and food.”
        </li>
        <li>When at a fridge, <span style={{ color: 'orange' }}>you should maintain social distance (6 feet or more
            between each person) with other volunteers and visitors. </span>
        </li>
        <li>The CDC released a comprehensive guide to cleaning and disinfecting a public accessible space.</li>
        <li>For further information please visit: the Reopening Guidance for Cleaning and Disinfecting Public
           Spaces, Workplaces, Businesses, Schools, and Homes.
        </li>
      </ul>
    </div>
  );
}

export default FridgeGuidelines;