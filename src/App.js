import './App.css';
import Navbar from './components/Navbar';
import Datascience from './pages/Datascience';
import Artificial from './pages/Artificial';
import Cyber from './pages/Cyber';
import Cloud from './pages/Cloud';
import Home from './pages/Home';
import Devops from './pages/Devops';
import Webd from './pages/Webd';
import Mobile from './pages/Mobile';
import Machiene from './pages/Machiene';
import Block from './pages/Block';
import Button from "./components/Button"

import { BrowserRouter,Routes,Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/Datascience" element={<Datascience/>} />
          <Route path="/Artificial" element={<Artificial/>} />
          <Route path="/Block" element={<Block/>} />
          <Route path="/Cloud" element={<Cloud/>} />
          <Route path="/Devops" element={<Devops/>} />
          <Route path="/Webd" element={<Webd/>} />
          <Route path="/Mobile" element={<Mobile/>} />
          <Route path="/Machiene" element={<Machiene/>} />
          <Route path="/Cyber" element={<Cyber/>} />

   
        </Routes>
        
      </BrowserRouter>
      <Button>Success button</Button>
    </div>
  );
}


export default App;