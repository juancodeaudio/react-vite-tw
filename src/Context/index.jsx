/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { apiUrl } from "../api";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [items, setItems] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);
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
  const [searchByTitle, setSearchByTitle] = useState(null);
  const [searchByCategory, setSearchByCategory] = useState(null);

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setItems(data))
  }, [])

  const filterItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  const filterItemsByCategory = (items, searchByCategory) => {
    return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
  }

  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if(searchType === 'BY_TITLE') {
      return filterItemsByTitle(items, searchByTitle)
    }
    if(searchType === 'BY_CATEGORY') {
      return filterItemsByCategory(items, searchByCategory)
    }
    if(searchType === 'BY_TITLE_AND_CATEGORY') {
      return filterItemsByTitle(
        filterItemsByCategory(items, searchByCategory),
        searchByTitle
      ) 
    }
    if(!searchType) {
      return items
    }
  }

  useEffect(() => {
    if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
    if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
    if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
    if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
  }, [items, searchByTitle, searchByCategory])

  

  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  return (
    <ShoppingCartContext.Provider value={{
      items,
      filteredItems,
      isProductDetailOpen,
      isCheckoutSideMenuOpen,
      productInfo,
      cartProducts,
      order,
      searchByTitle,
      searchByCategory,
      setItems,
      setProductInfo,
      setCartProducts,
      setOrder,
      setSearchByTitle,
      setSearchByCategory,
      openProductDetail,
      closeProductDetail,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}