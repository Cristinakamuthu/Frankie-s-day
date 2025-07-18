import React from 'react'
import Navbar from './Navbar'
import TMT from '/home/cristina/Development/code/my_own_projects/frankie-portfolio/src/TMT.jpeg'

const Videos = () => {
  return (
    <div>
     <header>
        <Navbar/>
      </header> 
      <div repost-image>
        <img src={TMT} alt='tmt crew' className='repost-image-container'/>
  <span className="centered-text">TMT CREW</span>
      </div>
      <div className="tmt-crew-thanks animate">
  <p>
    TMT Crew is the dedicated team that stands beside Francisca in every season — 
    from studio sessions to live performances. Their passion, loyalty, and faith 
    bring her vision to life. She’s deeply grateful for their unwavering support 
    and the love they pour into every moment.
  </p>
</div>

    </div>
  )
}

export default Videos