import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import GetInvolved from './pages/GetInvolved';
import Guidelines from './pages/Guidelines';
import Contact from './pages/Contact';
import PPEGuidelines from './pages/PPEGuidelines';
import FridgeGuidelines from './pages/FridgeGuidlelines';
import VolunteerGuidelines from './pages/VolunteerGuidelines';
import HeavyGuidelines from './pages/HeavyGuidelines';
import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  useEffect(() => {
    document.title = "Seattle Community Fridge"; // Set the website name
    
  }, 
  [ ]); 
  // const [projects, setProject] = useState([]);
  // const builder = imageUrlBuilder(client);

  // // fetch information
  // useEffect(() => {
  //   async function getProject() {
  //     const query = `*[_type == "project"] {
  //       name,
  //       body,
  //       image,
  //       link,
  //       projectUrl,
  //       deployed
  //     }`

  //     const data = await client.fetch(query);
  //     setProject(projects);
  //   }

  //     getProject();
  // }, []);

  // // Used to display images
  // function urlFor(source) {
  //   return builder.image(source);
  // }




  return (
    <div className="App">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

        {/* {projects.map(project => (
        <div key={project._id} style={{backgroundColor: 'lightgray', padding: 10, margin: 10, borderRadius: 10}}>
          <img src={urlFor(project.image).url()} alt={project.name} style={{width: 100, borderRadius: 10}}/>
          <h2>🐶{project.name}</h2>
        </div>
      ))} */}

      <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />  
        <Route path='/About Us' exact element={<Aboutus />}/>
        <Route path = "/GetInvolved" exact element = {<GetInvolved/>} />
        <Route path = "/Guidelines" exact element = {<Guidelines/>} />
        <Route path = "/Contact" exact element = {<Contact/>} />
        <Route path = "/FridgeGuidelines" exact element = {<FridgeGuidelines/>} />
        <Route path = "/VolunteerGuidelines" exact element = {<VolunteerGuidelines/>} />
        <Route path = "/HeavyGuidelines" exact element = {<HeavyGuidelines/>} />
        <Route path = "/PPEGuidelines" exact element = {<PPEGuidelines/>} />
      </Routes>
      </Router>
    </div>
  );
}
export default App;
