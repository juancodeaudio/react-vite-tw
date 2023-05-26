import { NavLink } from "react-router-dom"
import { useContext } from "react";

import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context";


const Navbar = () => {
  const context = useContext(ShoppingCartContext);
  const activeStyle = 'underline underline-offset-8';

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to='/'>
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/'
            className={({ isActive }) => 
            isActive ? activeStyle : undefined  
          }>
            All
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/clothes'
            className={({ isActive }) => 
            isActive ? activeStyle : undefined  
          }>
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/electronics'
            className={({ isActive }) => 
            isActive ? activeStyle : undefined  
          }>
            Electroncis
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/furnitures'
            className={({ isActive }) => 
            isActive ? activeStyle : undefined  
          }>
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/toys'
            className={({ isActive }) => 
            isActive ? activeStyle : undefined  
          }>
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/others'
            className={({ isActive }) => 
            isActive ? activeStyle : undefined  
          }>
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">
          juancodeaudio@platzi.com
        </li>
        <li>
          <NavLink 
            to='/my-orders'
            className={({ isActive }) => 
            isActive ? activeStyle : undefined  
          }>
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/my-account'
            className={({ isActive }) => 
            isActive ? activeStyle : undefined  
          }>
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/sign-in'
            className={({ isActive }) => 
            isActive ? activeStyle : undefined  
          }>
            Sign In
          </NavLink>
        </li>
        <li onClick={context.openCheckoutSideMenu} className="flex items-center cursor-pointer">
          <ShoppingBagIcon className="h-6 w-6 text-black" /> 
          <div>{context.cartProducts.length}</div>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar