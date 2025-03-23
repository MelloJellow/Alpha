import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Announcement from '../components/Announcement'
import RatingReview from '../components/Ratings'
import UploadContainer from '../utils/UploadContainer'
import RouteMap from '../components/MapTest'





const Home = () => {
  return (
    <>
      
      <Navbar />
      <Announcement/>
      <RatingReview/>
      <Slider />
      <Products/>
      <Newsletter />
      <Footer />
      
    </>
    
  )
}

export default Home
