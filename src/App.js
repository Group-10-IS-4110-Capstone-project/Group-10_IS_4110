import './App.css';
import Navbar from './components/Navbar';
import Datascience from './pages/Datascience';
import Home from './pages/Home';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import ForgotPwd from './pages/ForgotPwd/ForgotPwd';
import ChangePassword from './components/ForgotPassword/ChangePassword';
import Experts from './pages/Experts';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/Datascience" element={<Datascience/>} />
          <Route path="/Signup" element={<SignUp></SignUp>}></Route>
          <Route path="/Login" element={<Login></Login>} ></Route>
          <Route path="/ForgotPassword" element={<ForgotPwd></ForgotPwd>}></Route>
          <Route path="/ChangePassword" element={<ChangePassword></ChangePassword>}></Route>
          <Route path="/Experts" element={<Experts></Experts>} ></Route>
        </Routes>
        
      </BrowserRouter>
      
    </div>
  );
}


export default App;
