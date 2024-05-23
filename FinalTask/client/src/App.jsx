
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ROUTES } from './routes';
import { useState } from 'react';
import { BasketContext } from './context/basketContext';
import { FavContext } from './context/favContext';

function App() {
  const routes = createBrowserRouter(ROUTES)
  const localBasket = JSON.parse(localStorage.getItem('basket'));
  const [basket, setBasket] = useState(localBasket || []);
  if (!localBasket) {
    localStorage.setItem('basket', JSON.stringify([]));
  }
  const localFav = JSON.parse(localStorage.getItem('fav'));
  const [fav, setFav] = useState(localFav || []);
  if (!localFav) {
    localStorage.setItem('fav', JSON.stringify([]));
  }
  


  return (
    <>
    <FavContext.Provider value={{fav,setFav}}>
      <BasketContext.Provider value={{basket,setBasket}}>
        <RouterProvider router={routes} />
      </BasketContext.Provider>
      </FavContext.Provider>
    </>
  )
}

export default App
