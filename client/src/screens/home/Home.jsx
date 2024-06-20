import React, { useState, useEffect } from 'react';
import Frame2 from '../../assets/Frame 2.png'
import unsplash1 from '../../assets/unsplash1.png'
import SwiperComponent from '../../components/homeComp/Swipper';
import Footer from '../../components/Footer';
const Home = () => {
  const [activeSection, setActiveSection] = useState('');
  return (
    <div>
      {/* First Section */}
      <div
    className="flex items-center justify-between p-40"
    style={{
      backgroundImage: `url(${Frame2})`,
      width: '100vw',
      height: '100vh',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      paddingTop: '160px'
    }}> {/* Add padding to account for fixed navbar and footer */}
    
      {/* <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#52B1B0]"
          // style={{ zIndex: 1 }}
        ></div> */}
      <div>
        {/*  className="relative" */}
        <h1
        className='merriweather-regular text-8xl'
        >Crafting Your <br/>Perfect Stay, <br/>Every Step of the Way!</h1>
      </div>
      <div
      
      >
      <img src={unsplash1} alt="Description of the image" className="max-w-full h-auto"/>
      </div>
    </div>
    {/* Second Section bg-gradient-to-t from-[#fbffff] to-[#70d1cf]*/}
    <div className="flex items-center justify-between p-40 h-screen ">
      <div className="w-1/2">
          <SwiperComponent type="creative"/>
        </div>
        <div className="w-1/2 text-right">
          <h2 className="text-4xl font-bold">Where Moments Become Memories</h2>
        </div>
    </div>
    <div className="flex items-center justify-between p-40 h-screen ">
      <div className="flex items-center justify-center h-screen">
        <SwiperComponent type="autoplay" />
      </div>
    </div>
    <Footer/>
    </div>
    
  );
};

export default Home;
