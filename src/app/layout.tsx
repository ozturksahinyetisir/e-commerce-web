import type { Metadata } from "next";
import "./styles/globals.css";
import Navbar from './components/navbar/Navbar';
import Footer from "./components/footer/Footer";

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
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
