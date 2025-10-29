import React, { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';

const FavoritesContext = createContext();

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [disabledItems, setDisabledItems] = useState(new Set());

  const addToFavorites = (item) => {
    if (disabledItems.has(item.id)) {
      return; // Item already in favorites
    }

    setFavorites(prev => [...prev, { ...item, bids_count: Math.floor(Math.random() * 20) + 1 }]);
    setDisabledItems(prev => new Set([...prev, item.id]));
    
    toast.success(`${item.title} added to favorites!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const removeFromFavorites = (itemId) => {
    setFavorites(prev => prev.filter(item => item.id !== itemId));
    setDisabledItems(prev => {
      const newSet = new Set(prev);
      newSet.delete(itemId);
      return newSet;
    });
    
    toast.info('Item removed from favorites', {
      position: "top-right",
      autoClose: 2000,
    });
  };

  const getTotalAmount = () => {
    return favorites.reduce((total, item) => total + item.current_bid, 0);
  };

  const isItemDisabled = (itemId) => {
    return disabledItems.has(itemId);
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    getTotalAmount,
    isItemDisabled,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};