import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './input.css'

import { LikedProductsProvider } from './Context/LikedProductsContext'
import { OrdersItemProvider } from './Context/OrdersItemContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LikedProductsProvider>
      <OrdersItemProvider>
       
     
    <App />
    </OrdersItemProvider>
    </LikedProductsProvider>
  </React.StrictMode>,
)

//const { likedProducts, toggleLike, isLiked } = useLikedProducts();
