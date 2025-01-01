import React from "react";

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-600">E-Ticaret Mağazamıza Hoş Geldiniz!</h1>
        <p className="text-lg mt-2">En yeni ürünlerle alışverişe başlayın.</p>
      </header>

      <main>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder alanı */}
          <div className="col-span-full text-center text-gray-500 text-lg">
            Ürünler Yükleniyor...
          </div>
        </section>
      </main>

      <footer className="text-center mt-10 py-4 border-t">
        <p className="text-sm text-gray-500">&copy; 2024 Öztürk E-Ticaret Web. Tüm Haklar Saklıdır.</p>
      </footer>
    </div>
  );
};

export default Home;
