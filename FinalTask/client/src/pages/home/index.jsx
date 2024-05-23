import React, { useContext, useRef, useState } from 'react'
import { useGetAllQuery } from '../../services/productApi';

import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import DetailsIcon from '@mui/icons-material/Details';
import { Button } from 'antd';
import './index.scss'
import { Link, useNavigate } from 'react-router-dom';
import { BasketContext } from '../../context/basketContext';
import { FavContext } from '../../context/favContext';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


import { Navigation } from 'swiper/modules';



const Home = () => {
  const { data: products, refetch } = useGetAllQuery();
  const { basket, setBasket } = useContext(BasketContext);
  const { fav, setFav } = useContext(FavContext)
  const navigate = useNavigate()
  return (
    <>
      <div className="hero">

        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide><img src="https://preview.colorlib.com/theme/foundation/images/hero_1.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://preview.colorlib.com/theme/foundation/images/hero_2.jpg" alt="" /></SwiperSlide>

        </Swiper>
      </div>
      <div className="hero2">
        <div className="row">
          <div className="col-4 col-md-6 col-sm-12 col-xs-12 box box1">
            <div className="box-title">
              <h2>Rescue An Orphan</h2>
              <p>Accusantium dignissimos voluptas rem consequatur blanditiis error ratione illo sit quasi ut praesentium magnam</p>
            </div>
          </div>
          <div className="col-4 col-md-6 col-sm-12 col-xs-12 box box2">
            <div className="box-title">
              <h2>Feed The Hungry</h2>
              <p>Accusantium dignissimos voluptas rem consequatur blanditiis error ratione illo sit quasi ut praesentium magnam</p>
            </div>
          </div>
          <div className="col-4 col-md-6 col-sm-12 col-xs-12 box box3">
            <div className="box-title">
              <h2>Free Education</h2>
              <p>Accusantium dignissimos voluptas rem consequatur blanditiis error ratione illo sit quasi ut praesentium magnam</p>
            </div>
          </div>
        </div>
      </div>
      <div className="banner">
        <div className="container">
          <div className="row">
            {products && products.data.map((product) => {
              return <div className="col-4 col-md-6 col-sm-12 col-xs-12 box" key={product._id}>
                <img src={product.image} alt="" />
                <div className="banner_title">
                  <h1>Title:{product.title}</h1>
                  <h4>Price:{product.price}</h4>
                </div>

                <div>
                  <Button style={{ marginTop: '30px' }}  danger>
                    <Link to={`products/${product._id}`}><DetailsIcon /></Link>
                  </Button>
                  <Button onClick={() => {
                    const dublicateBasket = basket.find((x) => x._id == product._id)
                    if (dublicateBasket) {
                      dublicateBasket.count += 1;
                      setBasket([...basket]);
                      localStorage.setItem('basket', JSON.stringify([...basket]))
                    } else {
                      const newBasket = { ...product }
                      newBasket.count = 1
                      setBasket([...basket, newBasket])
                      localStorage.setItem('basket', JSON.stringify([...basket, newBasket]))

                    }
                  }} danger><ShoppingBasketIcon /></Button>
                  <Button onClick={() => {
                    const fount = fav.find((x) => x.id == product._id)
                    let uptadedFav;
                    if (fount) {
                      uptadedFav = fav.filter((x) => x.id != product._id)
                    } else {
                      uptadedFav = [...fav, { id: product._id }]
                    }
                    setFav(uptadedFav)
                    localStorage.setItem('fav', JSON.stringify(uptadedFav))
                  }}>
                    {fav.find((x) => x.id == product._id) ? (<FavoriteIcon style={{ color: 'red' }} />) : (<FavoriteBorderIcon style={{ color: 'red' }} />)}
                  </Button>
                </div>

              </div>
            })}
          </div>
        </div>
      </div>
      <div className="blog">
        <div className="container">
          <h1>OUR BLOG</h1>
          <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati ab possimus fugiat,<br /> autem aliquid, commodi quod voluptatum consectetur.</h6>
          <div className="row">
            <div className="col-6 col-md-6 col-sm-12 col-xs-12 blog1">
              <img src="https://preview.colorlib.com/theme/foundation/images/hero_1_no-text.jpg" alt="" />
              <div className="blog-title">
              <h2>How to Invest In Investing Company</h2>
              <p>JANUARY 18, 2019 BY<span>JAMES COOPER</span> </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat et suscipit iste libero neque. Vitae quidem ducimus voluptatibus nemo cum odio ab enim nisi, itaque, libero fuga veritatis culpa quis!</p>
              </div>
              <Button onClick={() => {
                navigate('/')
              }} danger>Get Started</Button>
            </div>
            <div className="col-6 col-md-6 col-sm-12 col-xs-12 blog1">

              <img src="https://preview.colorlib.com/theme/foundation/images/hero_2_no-text.jpg" alt="" />
              <div className="blog-title">
              <h2>How to Invest In Investing Company</h2>
              <p>JANUARY 18, 2019 BY<span>JAMES COOPER</span> </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat et suscipit iste libero neque. Vitae quidem ducimus voluptatibus nemo cum odio ab enim nisi, itaque, libero fuga veritatis culpa quis!</p>
              </div>
              <Button onClick={() => {
                navigate('/')
              }} danger>Get Started</Button>
            </div>
          </div>
        </div>
      </div>
   
    </>
  )
}

export default Home