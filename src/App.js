import './App.css';
import Navbar from './components/Navbar';
import Datascience from './pages/Datascience';
import Home from './pages/Home';
import { BrowserRouter,Routes,Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/Datascience" element={<Datascience/>} />
          
        </Routes>
        
      </BrowserRouter>
      
    </div>
  );
}


export default App;
