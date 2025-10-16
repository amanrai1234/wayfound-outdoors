"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";

function NavLink({ href, children }) {
  const pathname = usePathname();
  const active = pathname === href;
  const isHomePage = pathname === '/';
  const isUpcomingPage = pathname === '/upcoming';
  const isContactPage = pathname === '/contact';
  const needsDarkNavbar = isHomePage || isUpcomingPage || isContactPage;
  
  return (
    <Link
      href={href}
      className={`px-3 py-2 rounded-full text-sm font-semibold tracking-wide transition-all ${
        active
          ? needsDarkNavbar 
            ? "shadow-[0_0_0_2px_rgba(255,255,255,0.5)] bg-white/20 backdrop-blur-sm text-white"
            : "shadow-[0_0_0_2px_rgba(10,49,84,0.3)] bg-white/10 backdrop-blur-sm"
          : needsDarkNavbar
            ? "hover:bg-white/20 hover:backdrop-blur-sm text-white hover:text-white"
            : "hover:bg-white/10 hover:backdrop-blur-sm"
      }`}
      style={needsDarkNavbar ? {color: '#ffffff'} : {color: '#0A3154'}}
    >
      {children}
    </Link>
  );
}

export default function NavBar() {
  const [visible, setVisible] = useState(true);
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const isUpcomingPage = pathname === '/upcoming';
  const isContactPage = pathname === '/contact';
  const needsDarkNavbar = isHomePage || isUpcomingPage || isContactPage;

  useEffect(() => {
    const onScroll = () => {
      const threshold = window.innerHeight * 0.33; // top third of viewport
      const y = window.scrollY;
      setVisible(y < threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 px-8 sm:px-12 py-5 flex items-center justify-between transition-all duration-300 ${
      needsDarkNavbar 
        ? 'bg-black/40 backdrop-blur-md border-b border-white/20' 
        : 'bg-transparent'
    } ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
      <div className="flex items-center gap-3">
        <Link href="/">
          <Image src="/images/wayfound%20logo.jpg" alt="Wayfound Outdoors logo" width={28} height={28} className="h-8 w-8 rounded-md" />
        </Link>
      </div>
      <nav className="flex flex-wrap gap-2 sm:gap-3" style={{ fontFamily: 'var(--font-nav), var(--font-sans), ui-sans-serif' }}>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/programs">Programs</NavLink>
        <NavLink href="/news">News</NavLink>
        <NavLink href="/merch">Merch</NavLink>
        <NavLink href="/upcoming">Upcoming Events</NavLink>
        <NavLink href="/share-story">Share Story</NavLink>
        {/* <NavLink href="/donate">Donate</NavLink> */}
        <NavLink href="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}
