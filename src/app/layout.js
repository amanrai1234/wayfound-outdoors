import "./globals.css";
import NavBar from "../components/NavBar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = { 
  title: "Wayfound Outdoors", 
  description: "Outdoors site" 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} min-h-screen grid grid-rows-[auto_1fr_auto] text-emerald-50`}>

        {/* Navbar background - custom blue */}
        <header className="sticky top-0 z-50 bg-[#023E8A] shadow">
          <NavBar />
        </header>

        {/* Page Content */}
        <main className="row-start-2">{children}</main>

        {/* Footer with social links and Contact button */}
        <footer className="row-start-3 px-6 sm:px-10 py-8 text-sm text-emerald-100/80 border-t border-orange-400">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="order-3 sm:order-1">© {new Date().getFullYear()} Wayfound Outdoors. All rights reserved.</p>
            <div className="order-1 sm:order-2 flex items-center gap-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Facebook</a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a>
              <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">TikTok</a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">YouTube</a>
            </div>
            <div className="order-2 sm:order-3">
              <a href="/contact" className="inline-flex items-center rounded-md bg-[#023E8A] px-4 py-2 font-semibold text-white shadow hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-blue-300">
                Contact Us
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
