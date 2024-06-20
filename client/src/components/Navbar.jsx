import React from 'react';

const Navbar = () => {
  return (
    <nav className="p-4 flex justify-between items-center fixed w-full top-10 z-10 ">
      <div className=" text-2xl font-bold">Stay Planner</div>
      <div>
        <a href="/" className=" mx-2">Home</a>
        <a href="/contact" className=" mx-2">Contact Us</a>
        <a href="/packages" className=" mx-2">Packages</a>
        <a href="/packages" className=" mx-2">Signin</a>
        <a href="/packages" className=" mx-2">Logout</a>
      </div>
    </nav>
  );
};

export default Navbar;
