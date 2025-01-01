import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
    
        <div className="text-white text-2xl font-semibold">
          <Link href="/">E-Shop</Link>
        </div>

        <div className="hidden md:flex space-x-6 text-white">
          <Link href="/" className="hover:text-gray-300">
            Ana Sayfa
          </Link>
          <Link href="/shop" className="hover:text-gray-300">
            Mağaza
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            Hakkında
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            İletişim
          </Link>
        </div>

        <div className="md:hidden">
          <button className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="md:hidden mt-4">
        <Link href="/" className="block text-white hover:text-gray-300 p-2">
          Ana Sayfa
        </Link>
        <Link href="/shop" className="block text-white hover:text-gray-300 p-2">
          Mağaza
        </Link>
        <Link href="/about" className="block text-white hover:text-gray-300 p-2">
          Hakkında
        </Link>
        <Link href="/contact" className="block text-white hover:text-gray-300 p-2">
          İletişim
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
