import type { Metadata } from "next";
import "./styles/globals.css";
import Navbar from './components/navbar/Navbar';
import Footer from "./components/footer/Footer";
import CartProvider from "../../provider/CartProvider";
import Providers from "../../provider/Providers";

export const metadata: Metadata = {
  title: "Ozturk E-Ticaret",
  description: "Ozturk E-Ticaret ile alışverişe başla",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="" lang="en">
      <body className="bg-blue-50">
        <CartProvider>
        <Navbar/>
        <main className="min-h-screen">
          <Providers>{children}</Providers></main>
        <Footer/>
        </CartProvider>
      </body>
    </html>
  );
}
