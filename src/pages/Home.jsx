import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Announcement from '../components/Announcement'



const Home = () => {
  return (
    <>
      <Navbar />
      <Announcement/>
      <Slider />
      <Products/>
      <Newsletter />
      <Footer />
      
    </>
    
  )
}

export default Home
