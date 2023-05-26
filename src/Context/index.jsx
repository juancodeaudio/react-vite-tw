/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { apiUrl } from "../api";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [items, setItems] = useState(null);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const [productInfo, setProductInfo] = useState({
    title: "",
    price: "",
    description: "",
    images: [],
  });
  const [cartProducts, setCartProducts] = useState([]);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setItems(data))
  }, [])

  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  return (
    <ShoppingCartContext.Provider value={{
      items,
      isProductDetailOpen,
      isCheckoutSideMenuOpen,
      productInfo,
      cartProducts,
      order,
      setItems,
      setProductInfo,
      setCartProducts,
      setOrder,
      openProductDetail,
      closeProductDetail,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}