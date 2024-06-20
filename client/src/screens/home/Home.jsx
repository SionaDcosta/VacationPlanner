import React from 'react'
import Frame2 from '../../assets/Frame 2.png'
import Navbar from '../../components/Navbar'

const Home = () => {
  return (
    <div
      
      style={{
        backgroundImage: `url(${Frame2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', // Ensure full viewport height
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100vw',
    }}>
      <Navbar/>
    </div>
  )
}

export default Home