import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import Home from '../src/screens/home/Home';
import Contact from './screens/contactUs/Contact';
import Packages from './screens/packages/Packages';
// import LoginSignup from './pages/LoginSignup';




const LoginSignup = () => <h1 className="text-3xl font-bold">Login/Signup</h1>;

const Layout = () => {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
      
    </>
  );
};


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="packages" element={<Packages />} />
          <Route path="login" element={<LoginSignup />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
