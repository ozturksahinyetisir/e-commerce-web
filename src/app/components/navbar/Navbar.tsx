import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import Search from './Search';
import HamburgerMenu from './HamburgerMenu';
import User from './User';
import MyCart from './MyCart';



const Navbar = () => {
  return (
    
    <nav className="bg-blue-500 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
    
        <Logo/>
        
        <div className="hidden md:flex space-x-6 text-white">
          <Link href="/" className="hover:text-gray-300">
            Ana Sayfa
          </Link>
          <Link href="/shop" className="hover:text-gray-300">
            Mağaza
          </Link>
        </div>

        <Search/>
        <MyCart/>
        <User/>
        <HamburgerMenu/>
      </div>
    </nav>
  );
};

export default Navbar;
