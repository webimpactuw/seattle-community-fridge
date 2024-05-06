import React from 'react';
import '../styles/VolunteerGuidelines.css';

function VolunteerGuidelines() {
  return (
    <body>
      <div className="volunteer-container">
      <h1>Volunteer Guidelines</h1>
      <ul className="guidelines">
        <li>It is recommended that the group identify alternative group members to fulfill duties, in
            case another volunteer falls ill.
        </li>
        <li>If you are <span style={{ color: 'orange' }}>experiencing COVID-19 symptoms, or not feeling well at all, and you have
            volunteered for in person duties, please stay home and do not volunteer that day. </span> Let
            the Seattle Community Fridges group know that you will not be able to fulfill your duties
            that day. An identified alternate volunteer member will volunteer that day.
            maintain clear signage at each fridge 
            encouraging people to socially distance, sanitize, and use PPE.
        </li>
        <li>If PPE is available at fridge, have signs on door that reads: 
            “Please apply hand sanitizer before handling fridge and food,”
             and “Please take a pair of gloves before handling fridge and food.”
        </li>
        <li>If you are not feeling well, do not report to a fridge or duties, stay home, let the group know, and get tested ASAP.
        </li>
        <li>Volunteers should always comply with CDC guidance on PPE, safety, and hygiene.</li>
      </ul>

      <div className="heavy-lifting">
        <h1>Heavy Lifting Guidelines</h1>
        <p> For clear and easy guidance on the safest way to lift heavy objects, please consult the
            National Health Service’s Safe Lifting Tips.
        </p>
      </div>

      <div className="fridge-cleaning">
        <h1>Fridge Cleaning Log</h1>
        <p> Access our fridge cleaning log here.
        </p>
      </div>
    </div>
    </body>
  );
}

export default VolunteerGuidelines;