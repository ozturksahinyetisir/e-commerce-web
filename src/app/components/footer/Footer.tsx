import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold">Ozturk-Shop</h2>
            <p className="text-sm mt-2">En yeni ürünler ve fırsatlar için bizi takip edin!</p>
          </div>

          <div className="flex space-x-6">
            <div>
              <h3 className="font-semibold">Hızlı Linkler</h3>
              <ul className="text-sm mt-2">
                <li><a href="/about" className="hover:text-gray-400">Hakkında</a></li>
                <li><a href="/shop" className="hover:text-gray-400">Mağaza</a></li>
                <li><a href="/contact" className="hover:text-gray-400">İletişim</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Yardım</h3>
              <ul className="text-sm mt-2">
                <li><a href="/faq" className="hover:text-gray-400">SSS</a></li>
                <li><a href="/returns" className="hover:text-gray-400">İade ve Değişim</a></li>
                <li><a href="/shipping" className="hover:text-gray-400">Kargo</a></li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Linkedin & Github</h3>
            <div className="flex space-x-4 mt-2 justify-center">
            <a href="https://www.linkedin.com/in/ozturksahinyetisir/" target="_blank" rel="noopener noreferrer">n
              <svg className="w-6 h-6 text-white hover:text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.94 0H.06C.03 0 0 .03 0 .06v23.88c0 .03.03.06.06.06h23.88c.03 0 .06-.03.06-.06V.06C24 .03 23.97 0 23.94 0zm-6.47 20.94h-3.57v-6.77c0-1.61-.58-2.71-2.04-2.71-1.1 0-1.75.74-2.03 1.46-.1.24-.13.57-.13.89v7.13H7.45V9.93h3.42v1.45h.05c.47-.9 1.64-1.64 3.01-1.64 2.21 0 3.89 1.48 3.89 4.26v6.94h-.01zM3.47 8.37c-1.18 0-2.14-.96-2.14-2.14s.96-2.14 2.14-2.14 2.14.96 2.14 2.14-.96 2.14-2.14 2.14zm1.78 12.57h-3.56V9.93h3.56v11.01z"></path>
              </svg>
            </a>
              <a href="https://github.com/ozturksahinyetisir" target="_blank" rel="noopener noreferrer">
              <svg aria-hidden="true" className="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
        <p>&copy; 2024 Ozturk E-Shop. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;
