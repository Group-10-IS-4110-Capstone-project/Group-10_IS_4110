import './App.css';
import Navbar from './components/Navbar';
import Datascience from './pages/Datascience';
import Artificial from './pages/Artificial';


import Home from './pages/Lannding/Home';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import ForgotPwd from './pages/ForgotPwd/ForgotPwd';
import ChangePassword from './components/ForgotPassword/ChangePassword';
import AdminContent from './pages/Admin/AdminContent'
import AdminEx from './pages/Admin/AdminEx'
import AdminUnder from './pages/Admin/AdminUnder'

import Cyber_Security from './pages/Cyber_Security'
import Data_Science from './pages/Data_Science'
import Artificial_Intelligence from './pages/Artificial_Intelligence'
import BlockChain from './pages/BlockChain'
import Cloud_Computing from './pages/Cloud_Computing'
import DevOps from './pages/DevOps'
import Machine_Learning from './pages/Machine_Learning'
import Mobile_app_Dev from './pages/Mobile_app_Dev'
import Web_Development from './pages/Web_Development'




import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/Datascience" element={<Datascience/>} />
          <Route path="/Artificial" element={<Artificial/>} />

         <Route path="/AdminContent" element={<AdminContent></AdminContent>}></Route>
          <Route path="/AdminEx" element={<AdminEx></AdminEx>}></Route>
          <Route path="/AdminUnder" element={<AdminUnder></AdminUnder>}></Route>
          <Route path="/Signup" element={<SignUp></SignUp>}></Route>
          <Route path="/Login" element={<Login></Login>} ></Route>
          <Route path="/ForgotPassword" element={<ForgotPwd></ForgotPwd>}></Route>
          <Route path="/ChangePassword/:id/:token" element={<ChangePassword></ChangePassword>}></Route>

          <Route path="/Cyber_Security" element={<Cyber_Security></Cyber_Security>} ></Route>
          <Route path="/Data_Science" element={<Data_Science></Data_Science>} ></Route>
          <Route path="/Artificial_Intelligence" element={<Artificial_Intelligence></Artificial_Intelligence>} ></Route>
          <Route path="/BlockChain" element={<BlockChain></BlockChain>} ></Route>
          <Route path="/Cloud_Computing" element={<Cloud_Computing></Cloud_Computing>} ></Route>
          <Route path="/DevOps" element={<DevOps></DevOps>} ></Route>
          <Route path="/Machine_Learning" element={<Machine_Learning></Machine_Learning>} ></Route>
          <Route path="/Mobile_app_Dev" element={<Mobile_app_Dev></Mobile_app_Dev>} ></Route>
          <Route path="/Web_Development" element={<Web_Development></Web_Development>} ></Route>

        </Routes>
        
      </BrowserRouter>
      
    </div>
  );
}


export default App;
