import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-custom p-12 flex justify-between items-center fixed w-full top-0 h-20 z-10">
      <div className="text-white text-4xl font-bold font-playwrite-au-vic">Vacay Planr</div>
      <div className="space-x-4 text-xl">
        {/* baac54 */}
        <a href="/" className="text-[#0b6b6a] px-4 py-2 transition duration-300 hover:text-[#868c8c]">Home</a>
        <a href="/contact" className="text-white px-4 py-2 transition duration-300 hover:text-[#84c2c1]">Contact Us</a>
        <a href="/packages" className="text-white px-4 py-2 transition duration-300 hover:text-[#428281]">Packages</a>
        <a href="/login" className="text-white px-4 py-1 bg-[#0D7A79] rounded hover:bg-[#868c8c] transition">SignIn/Login</a>
        {/* <a href="/login" className="text-white px-4 py-2 transition duration-300 hover:text-[#0b6b6a]">SignIn/Login</a> */}
      </div>
    </nav>
  );
};

export default Navbar;
