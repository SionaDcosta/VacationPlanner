import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-gradient-custom p-12 flex justify-between items-center fixed w-full top-0 h-20 z-10">
      <div className="text-white text-4xl font-bold font-playwrite-au-vic">Vacay Planr</div>
      <div className="space-x-4 text-xl">
        <Link to="/" className="text-[#0b6b6a] px-4 py-2 transition duration-300 hover:text-[#868c8c]">Home</Link>
        <Link to="/contact" className="text-white px-4 py-2 transition duration-300 hover:text-[#84c2c1]">Contact Us</Link>
        <Link to="/packages" className="text-white px-4 py-2 transition duration-300 hover:text-[#428281]">Packages</Link>
        <Link to="/login" className="text-white px-4 py-1 bg-[#0D7A79] rounded hover:bg-[#868c8c] transition">SignIn/Login</Link>
        
        <button onClick={toggleDropdown} className="text-white px-4">
          <FontAwesomeIcon icon={faList} className="text-xl" />
        </button>
        {dropdownOpen && (
          <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded shadow-lg">
            <ul>
              <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">Item 1</li>
              <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">Item 2</li>
              <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">Item 3</li>
              <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">Item 4</li>
              <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">Item 5</li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
