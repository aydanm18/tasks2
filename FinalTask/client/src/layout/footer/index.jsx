import React from 'react'
import './index.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-4 col-md-6 col-sm-12 col-xs-12 footer">
            <h2>ABOUT US</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</p>
          </div>
          <div className="col-4 col-md-6 col-sm-12 col-xs-12 footer">
            <h2>FEATURES
            </h2>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-4 col-md-6 col-sm-12 col-xs-12 footer">
            <h2>SOME PARAGRAPH</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat nostrum libero iusto dolorum vero atque aliquid.</p>
            <h2>SUBSCRIBE TO NEWSLETTER</h2>
            <form action="">
              <input type="text" />
              <h3>Supscribe</h3>
              <ul className='links'>
                <li><a href="#"><FacebookIcon/></a></li>
                <li><a href="#"><InstagramIcon/></a></li>
                <li><a href="#"><TwitterIcon/></a></li>
                <li><a href="#"></a><LinkedInIcon/></li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer