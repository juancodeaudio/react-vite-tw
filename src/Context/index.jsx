/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
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

  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  return (
    <ShoppingCartContext.Provider value={{
      isProductDetailOpen,
      isCheckoutSideMenuOpen,
      productInfo,
      cartProducts,
      order,
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