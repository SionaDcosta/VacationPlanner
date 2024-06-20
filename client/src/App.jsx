import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './screens/home/Home';
//const Home = () => <h1 className="text-3xl font-bold">Welcome to Stay Planner</h1>;
const ContactUs = () => <h1 className="text-3xl font-bold">Contact Us</h1>;
const Packages = () => <h1 className="text-3xl font-bold">Packages</h1>;
const LoginSignup = () => <h1 className="text-3xl font-bold">Login/Signup</h1>;

const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
