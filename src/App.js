import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import GetInvolved from './pages/GetInvolved';
import Guidelines from './pages/Guidelines';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
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
    </div>
  );
}

export default App;
