import React from 'react'
import Image1 from './assets/heroImage.jpg'
import EstimateButton from './EstimateButton'
import { Link } from 'react-router-dom'


const Hero = () => {
  return (
    <div className='bg-[url("./assets/heroImage.jpg")] bg-center bg-cover bg-amber-60 w-full lg: min-h-[100vh] bg-no-repeat'>
      <p>Welcome to interior wall painting</p>
      <h1><span>The Best Quality</span> <span>Painting For</span><span>Your Homes and Offices.</span></h1>
      < EstimateButton>Discover More</EstimateButton>
      <button><Link to="/about">about</Link></button>
    </div>
  )
}

export default Hero
