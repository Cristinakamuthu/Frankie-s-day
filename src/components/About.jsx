import React from 'react'
import Navbar from './Navbar'
import francisca from '/home/cristina/Development/code/my_own_projects/frankie-portfolio/src/francisca.jpeg'

const About = () => {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <div className='about-page'>
      <div className='image-container' >
        <img src={francisca} alt='profile' className='profile-pic'></img>
</div>
<div>
  
</div>
      </div>
    </div>
  )
}

export default About