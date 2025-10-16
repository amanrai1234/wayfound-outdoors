import "./globals.css";
import NavBar from "../components/NavBar";
import { Inter, Cinzel_Decorative } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const cinzel = Cinzel_Decorative({ subsets: ["latin"], weight: ["400","700"], variable: "--font-nav" });

export const metadata = { 
  title: "Wayfound Outdoors", 
  description: "Outdoors site",
  icons: {
    icon: [
      { url: "/images/wayfound%20logo.jpg", type: "image/jpeg" },
    ],
    shortcut: ["/images/wayfound%20logo.jpg"],
    apple: ["/images/wayfound%20logo.jpg"],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cinzel.variable} min-h-screen grid grid-rows-[auto_1fr_auto] text-emerald-50`}>

        {/* Immersive navbar renders itself fixed; no wrapper here */}
        <NavBar />

        {/* Page Content */}
        <main className="row-start-2">{children}</main>

        {/* Footer with enhanced information and social links */}
        <footer className="row-start-3 px-6 sm:px-10 py-8 bg-[#ECCF45]">
          <div className="max-w-6xl mx-auto">
            {/* Main footer content */}
            <div className="flex flex-col lg:flex-row gap-8 mb-6">
              {/* About Section */}
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-3" style={{color: '#0A3154'}}>About Wayfound Outdoors</h3>
                <p className="text-sm leading-relaxed mb-4" style={{color: '#0A3154'}}>
                  Empowering young men through transformative outdoor experiences, mentorship, and community building. 
                  We believe in the power of nature to shape character, build confidence, and create lasting bonds.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div>
                    <p className="text-sm font-semibold mb-1" style={{color: '#0A3154'}}>Contact Info</p>
                    <p className="text-sm" style={{color: '#0A3154'}}>Email: wayfoundoutdoor@gmail.com</p>
                    <p className="text-sm" style={{color: '#0A3154'}}>Phone: (585) 455-9545</p>
                  </div>
                </div>
              </div>
              
              {/* Quick Links */}
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-3" style={{color: '#0A3154'}}>Quick Links</h3>
                <ul className="space-y-2 text-sm" style={{color: '#0A3154'}}>
                  <li><a href="/about" className="hover:underline">About Us</a></li>
                  <li><a href="/programs" className="hover:underline">Programs</a></li>
                  <li><a href="/upcoming" className="hover:underline">Upcoming Events</a></li>
                  <li><a href="/news" className="hover:underline">News & Stories</a></li>
                  <li><a href="/share-story" className="hover:underline">Share Your Story</a></li>
                  <li><a href="/contact" className="hover:underline">Contact</a></li>
                </ul>
              </div>
            </div>
            
            {/* Bottom section with social links and copyright */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-black/20">
              <p className="text-sm" style={{color: '#0A3154'}}>© {new Date().getFullYear()} Wayfound Outdoors. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:underline" style={{color: '#0A3154'}}>Facebook</a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:underline" style={{color: '#0A3154'}}>Instagram</a>
                <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:underline" style={{color: '#0A3154'}}>TikTok</a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:underline" style={{color: '#0A3154'}}>YouTube</a>
              </div>
              <a href="/contact" className="inline-flex items-center rounded-md px-4 py-2 font-semibold text-white shadow hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-blue-300" style={{backgroundColor: '#023E8A'}}>
                Contact Us
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
