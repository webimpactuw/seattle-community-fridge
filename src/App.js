import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import GetInvolved from './pages/GetInvolved';
import Guidelines from './pages/Guidelines';
import Contact from './pages/Contact';
import Footer from'./components/Footer';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  useEffect(() => {
    document.title = "Seattle Community Fridge"; // Set the website name
  }, []); 
  return (
    <div className="App">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />  
        <Route path='/About Us' exact element={<Aboutus />}/>
        <Route path = "/GetInvolved" exact element = {<GetInvolved/>} />
        <Route path = "/Guidelines" exact element = {<Guidelines/>} />
        <Route path = "/Contact" exact element = {<Contact/>} />
      </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
