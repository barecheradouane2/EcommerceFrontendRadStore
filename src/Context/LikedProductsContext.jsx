
// LikedProductsContext.js
import { createContext, useState, useEffect, useContext } from 'react';

const LikedProductsContext = createContext();

export const LikedProductsProvider = ({ children }) => {
  const [likedProducts, setLikedProducts] = useState([]);

  // Load from localStorage on first render
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('likedProducts')) || [];
    setLikedProducts(stored);
  }, []);

  // Update localStorage whenever likedProducts changes
  useEffect(() => {
    localStorage.setItem('likedProducts', JSON.stringify(likedProducts));
  }, [likedProducts]);

  const toggleLike = (productId) => {
    setLikedProducts(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const isLiked = (productId) => likedProducts.includes(productId);

  return (
    <LikedProductsContext.Provider value={{ likedProducts, toggleLike, isLiked }}>
      {children}
    </LikedProductsContext.Provider>
  );
};

export const useLikedProducts = () => useContext(LikedProductsContext);
