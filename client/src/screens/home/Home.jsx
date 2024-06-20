import React from 'react';
import Frame2 from '../../assets/Frame 2.png'
import unsplash1 from '../../assets/unsplash1.png'
const Home = () => {
  return (
    <div
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
        className='p-40 font-merriweather-bold-italic text-4xl'
        >Crafting Your Perfect Stay, Every Step of the Way</h1>
      </div>
      <div style={{ backgroundImage: `url(${unsplash1})` }}>
        
      </div>
    </div>
  );
};

export default Home;
