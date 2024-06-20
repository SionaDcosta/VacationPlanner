import React from 'react';
import Frame2 from '../../assets/Frame 2.png'
const Home = () => {
  return (
    <div className="pt-24"
    style={{
      backgroundImage: `url(${Frame2})`,
      width: '100vw',
      height: '100vh',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}> {/* Add padding to account for fixed navbar and footer */}
      hi
    </div>
  );
};

export default Home;
