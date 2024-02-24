import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
      <Route path='/' exact element={<Home />} />  
      <Route path='About Us' exact element={<Aboutus />}/>    
      </Routes>
      </Router>
    </div>
  );
}

export default App;
