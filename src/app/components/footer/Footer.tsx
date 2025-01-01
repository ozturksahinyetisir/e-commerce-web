import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold">E-Shop</h2>
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
            <h3 className="font-semibold">Bizi Takip Edin</h3>
            <div className="flex space-x-4 mt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6 text-white hover:text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 1 0-10 10A10 10 0 0 0 22 12ZM12 2a10 10 0 1 1 0 20A10 10 0 0 1 12 2ZM11 17V12H9v-2h2V8c0-2.42 1.79-4 4.19-4h1.81v2h-1c-1.11 0-1.19.43-1.19 1.06v2h2l-.33 2h-1.67v5h-2Z"></path>
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
