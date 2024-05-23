import React, { useContext } from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { BasketContext } from '../../context/basketContext';
const Header = () => {
  const { basket } = useContext(BasketContext)
  return (
    <header>
      <div className="container">
        <nav>
          <h2>FOUNDATION</h2>
          <ul>
            <li><Link className='links' to={'add-page'}>AddProduct</Link></li>
            <li><Link className='links' to={'/'}>Home</Link></li>
            <li><Link className='links' to={'basket'}><ShoppingBasketIcon /><sup>{basket.length}</sup></Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header