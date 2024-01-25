import './App.css';
import Navbar from './components/Navbar';
import Datascience from './pages/Datascience';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Datascience" element={<Datascience/>} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
