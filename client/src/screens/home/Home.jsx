// import React from 'react'
// import Frame2 from '../../assets/Frame 2.png'
// import Navbar from '../../components/Navbar'

// const Home = () => {
//   return (
//     <div
      
//       style={{
//         backgroundImage: `url(${Frame2})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         minHeight: '100vh', // Ensure full viewport height
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         flexDirection: 'column',
//         width: '100vw',
//     }}>
      
//     </div>
//   )
// }

// export default Home

import React from 'react';

const Home = () => {
  return (
    <div className="pt-24 pb-16"> {/* Add padding to account for fixed navbar and footer */}
      <h1 className="text-3xl font-bold">Welcome to Vacay Planr</h1>
      {/* Additional content for your Home page */}
    </div>
  );
};

export default Home;
