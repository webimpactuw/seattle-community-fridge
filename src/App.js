import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import GetInvolved from './pages/GetInvolved';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />  
        <Route path='About Us' exact element={<Aboutus />}/>
        <Route path = "/GetInvolved" exact element = {<GetInvolved/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
