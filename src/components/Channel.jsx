import Navbar from './Navbar'
import Youtube from './Youtube';
import Flogo from '/home/cristina/Development/code/my_own_projects/frankie-portfolio/src/Flogo.jpeg'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
const Channel = () => {
  return (
    <div><header>
        <Navbar/>
      </header>
      <div className='channel-container'>
      <img src={Flogo} alt='francicaKmauthu logo' className='frankie-logo'/> 
      <div className='channel-side-container'>
        <h2>Frankie's channel</h2>
        <p>  ✨ Here are her channels  click to follow for more music !  ✨</p>
<div className="social-circle-links">
      <a href="https://www.facebook.com/frankie.kingola" target="_blank" rel="noopener noreferrer" className="icon fb">
        <FaFacebookF />
      </a>
      <a href="https://www.instagram.com/franciscakamuthu_/" target="_blank" rel="noopener noreferrer" className="icon ig">
        <FaInstagram />
      </a>
      <a href="https://www.tiktok.com/@k.frankie81?lang=en" target="_blank" rel="noopener noreferrer" className="icon tk">
    <SiTiktok />
  </a>
      <a href="https://www.youtube.com/@Franciscakamuthumusic" target="_blank" rel="noopener noreferrer" className="icon yt">
        <FaYoutube />
      </a>
    </div>

        </div>  
        </div>

        <div>
          <h2 className='h2-videos'>Here are some of her videos Enjoy!</h2>
<Youtube/>
        </div>
        </div>
  )
}

export default Channel