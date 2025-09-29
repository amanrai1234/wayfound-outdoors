"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

function NavLink({ href, children }) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={`px-2 py-1 rounded text-sm transition-colors ${
        active ? "bg-blue-600 text-white font-semibold" : "text-blue-50 hover:bg-blue-500/40 hover:text-white"
      }`}
    >
      {children}
    </Link>
  );
}

export default function NavBar() {
  return (
    <header className="px-6 sm:px-10 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image src="/images/wayfound%20logo.jpg" alt="Wayfound Outdoors logo" width={28} height={28} className="h-7 w-7 rounded-md" />
        <h1 className="text-lg sm:text-xl font-semibold tracking-tight text-blue-50">
          Wayfound Outdoors
        </h1>
      </div>
      <nav className="flex flex-wrap gap-3">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/programs">Programs</NavLink>
        <NavLink href="/news">News</NavLink>
        <NavLink href="/merch">Merch</NavLink>
        {/* <NavLink href="/donate">Donate</NavLink> */}
        <NavLink href="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}
