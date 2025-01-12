import React from "react";
import Category from "./components/Home/Category";
import Banner from "./components/Home/Banner";
import Products from "./components/Home/Products";

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="text-center mb-10">
      <h1 className="text-5xl font-serif text-gray-800">
        Öztürk Accessory
      </h1>
<p className="text-lg text-gray-500 mt-4 font-light">
  En yeni, zarif takılarla alışverişe başlayın ve kendinizi şımartın!
</p>
      </header>
      <div className="bg-white p-4 rounded-lg shadow-md">
          <Banner/>
          <Category/>
          <Products/>
        </div>
      <footer className="text-center mt-10 py-4 border-t">
        <p className="text-sm text-gray-500">&copy; 2024 Öztürk E-Ticaret Web. Tüm Haklar Saklıdır.</p>
      </footer>
    </div>
  );
};

export default Home;
