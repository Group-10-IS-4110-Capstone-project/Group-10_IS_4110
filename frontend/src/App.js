import './App.css';
import Navbar from './components/Navbar';
import Datascience from './pages/Datascience';
import Artificial from './pages/Artificial';


import Home from './pages/Lannding/Home';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import ForgotPwd from './pages/ForgotPwd/ForgotPwd';
import ChangePassword from './components/ForgotPassword/ChangePassword';
import Experts from './pages/Experts';
import Data_Science from './pages/Data_Science'
import Artificial_Intelligence from './pages/Artificial_Intelligence';


import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/Datascience" element={<Datascience/>} />
          <Route path="/Artificial" element={<Artificial/>} />
         
         

          <Route path="/Signup" element={<SignUp></SignUp>}></Route>
          <Route path="/Login" element={<Login></Login>} ></Route>
          <Route path="/ForgotPassword" element={<ForgotPwd></ForgotPwd>}></Route>
          <Route path="/ChangePassword/:id/:token" element={<ChangePassword></ChangePassword>}></Route>

          <Route path="/Experts" element={<Experts></Experts>} ></Route>
          <Route path="/Data_Science" element={<Data_Science></Data_Science>} ></Route>
          <Route path="/Artificial_Intelligence" element={<Artificial_Intelligence></Artificial_Intelligence>} ></Route>

        </Routes>
        
      </BrowserRouter>
      
    </div>
  );
}


export default App;
