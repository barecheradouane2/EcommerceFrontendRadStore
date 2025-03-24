import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './input.css'

import { LikedProductsProvider } from './Context/LikedProductsContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LikedProductsProvider>
    <App />
    </LikedProductsProvider>
  </React.StrictMode>,
)

//const { likedProducts, toggleLike, isLiked } = useLikedProducts();
