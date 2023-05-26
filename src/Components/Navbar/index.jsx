import { NavLink } from "react-router-dom"
import { useContext } from "react";

import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context";


const Navbar = () => {
  const context = useContext(ShoppingCartContext);
  const activeStyle = 'underline underline-offset-8';

  const signOut = localStorage.getItem('sign-out')
  const parsedSignOut = JSON.parse(signOut)
  const isUserSignOut = context.signOut || parsedSignOut

  const handleSignOut = () => {
    const stringifiedSignOut = JSON.stringify(true)
    localStorage.setItem('sign-out', stringifiedSignOut)
    context.setSinOut(true)
  }

  const renderView = () => {
    if (isUserSignOut) {
      return (
        <li>
          <NavLink 
            to='/sign-in'
            className={({ isActive }) => 
            isActive ? activeStyle : undefined  
            }
            onClick={handleSignOut}
          >
            Sign In
          </NavLink>
        </li>
      )
    } else {
      return (
        <>
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
            }
            onClick={handleSignOut}
          >
            Sign Out
          </NavLink>
        </li>
        </>
      )
    }
  }
  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to='/' onClick={() => context.setSearchByCategory()}>
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/'
            onClick={() => context.setSearchByCategory()}
            className={({ isActive }) => 
            isActive ? activeStyle : undefined  
          }>
            All
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/clothes'
            onClick={() => context.setSearchByCategory('clothes')}
            className={({ isActive }) => 
            isActive ? activeStyle : undefined  
          }>
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/electronics'
            onClick={() => context.setSearchByCategory('electronics')}
            className={({ isActive }) => 
            isActive ? activeStyle : undefined  
          }>
            Electroncis
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/furnitures'
            onClick={() => context.setSearchByCategory('furnitures')}
            className={({ isActive }) => 
            isActive ? activeStyle : undefined  
          }>
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/toys'
            onClick={() => context.setSearchByCategory('toys')}
            className={({ isActive }) => 
            isActive ? activeStyle : undefined  
          }>
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/others'
            onClick={() => context.setSearchByCategory('others')}
            className={({ isActive }) => 
            isActive ? activeStyle : undefined  
          }>
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        {renderView()}
        <li onClick={context.openCheckoutSideMenu} className="flex items-center cursor-pointer">
          <ShoppingBagIcon className="h-6 w-6 text-black" /> 
          <div>{context.cartProducts.length}</div>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar