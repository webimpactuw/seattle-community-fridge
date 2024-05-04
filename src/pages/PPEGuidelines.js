import React from 'react';
import '../styles/PPEGuidelines.css';

function PPEGuidelines() {
  return (
    <div className="ppe-container">
      <h1>Personal Protective Equipment (PPE) Guidelines</h1>
      <h2>For up to date CDC PPE guidelines, check out the <a href="https://www.cdc.gov">CDC PPE guidelines</a>.</h2>
      <ul className="guidelines-text">
        <li>Before handling any equipment, please <a href="https://www.cdc.gov/handwashing">wash your hands</a> following CDC hand washing guidelines.</li>
        <li>King County residents have been advised to wear face coverings at any indoor or outdoor public space. For further instructions for wearing masks, see <a href="https://www.kingcounty.gov">King County's Guidance for Face Coverings</a>.</li>
        <li>Please always wear masks when engaging with or at fridges.</li>
        <li>When interacting with fridges, wear gloves, if available, and wipe down fridges when done.</li>
        <li>Hand hygiene should be performed before putting on or removing any PPE. You should thoroughly wash hands. If hand washing is unavailable, using alcohol-based hand sanitizer that contains at least 60% alcohol is recommended.</li>
        <li>You should dispose of any disposable PPE after any interaction with the public and apply a new disposable mask and gloves when available.</li>
        <li>The following resources provide further instruction for PPE: <a href="https://www.cdc.gov/hai/pdfs/ppe/PPE-Sequence.pdf">Sequence for Putting on PPE</a>.</li>
      </ul>
    </div>
  );
}

export default PPEGuidelines;