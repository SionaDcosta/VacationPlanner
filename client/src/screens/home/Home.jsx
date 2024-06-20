import React from 'react';
import Frame2 from '../../assets/Frame 2.png'
import unsplash1 from '../../assets/unsplash1.png'
const Home = () => {
  return (
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
      <div>
        <h1
        className='font-merriweather-bold-italic text-4xl'
        >Crafting Your Perfect Stay, Every Step of the Way</h1>
      </div>
      <div
      
      >
      <img src={unsplash1} alt="Description of the image" className="max-w-full h-auto"/>
      </div>
    </div>
  );
};

export default Home;
