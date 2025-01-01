import React from "react";
import Category from "./components/Home/Category";


const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-600">E-Ticaret Mağazamıza Hoş Geldiniz!</h1>
        <p className="text-lg mt-2">En yeni ürünlerle alışverişe başlayın.</p>
      </header>
      
      <div className="bg-white p-4 rounded-lg shadow-md">
          <Category/>
        </div>

      <footer className="text-center mt-10 py-4 border-t">
        <p className="text-sm text-gray-500">&copy; 2024 Öztürk E-Ticaret Web. Tüm Haklar Saklıdır.</p>
      </footer>
    </div>
  );
};

export default Home;
