
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom'
import RegisterPage from './Pages/RegisterPage';
import LoginPage from './Pages/LoginPage';
import ReimbursementRequest from './Pages/ReimbusmentRequest';
import ReimbursementAction from './Pages/ReimbusmentAction';
import YourReimbusmentRequest from './Pages/YourReimbusmentRequest';
import Home from './Pages/Home';
import UserContext from "./Components/UserContext"; 
import { useState } from 'react';

function App() {
  const [userId,setUserId]=useState(null);
  console.log(userId)
  return (
    <BrowserRouter>
    <UserContext.Provider value={{userId,setUserId}}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/reimbusment-request" element={<ReimbursementRequest />} />
          <Route path="/reimbusment-action" element={<ReimbursementAction />} />
          <Route path="/your-reimbusment-request" element={<YourReimbusmentRequest />} />
        </Routes>
      </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
