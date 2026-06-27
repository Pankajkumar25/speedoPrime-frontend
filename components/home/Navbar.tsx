"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = ["Home", "Movies", "TV Shows", "New/Upcoming", "My List"];
const linkHref = (label: string) => label === "Home" ? "/" : "/" + label.toLowerCase().replace(/[\s/]+/g, "-");

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const close = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/90 to-transparent px-4 md:px-8 py-3 flex items-center gap-6 md:gap-10">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img src="/image/logo.png" alt="SPEED" className="h-7 md:h-8 w-auto" />
      </div>

      {/* Hamburger - Mobile */}
      <button className="md:hidden text-gray-300 hover:text-white ml-auto relative w-6 h-6" onClick={() => setMenuOpen(!menuOpen)}>
        <span className={`absolute left-0 w-full h-0.5 bg-current rounded transition-all duration-300 ${menuOpen ? "top-2.5 rotate-45" : "top-1"}`} />
        <span className={`absolute left-0 w-full h-0.5 bg-current rounded transition-all duration-300 ${menuOpen ? "opacity-0" : "top-2.5"}`} />
        <span className={`absolute left-0 w-full h-0.5 bg-current rounded transition-all duration-300 ${menuOpen ? "top-2.5 -rotate-45" : "top-4"}`} />
      </button>

      {/* Nav Links - Desktop */}
      <div className="hidden md:flex items-center gap-8 lg:gap-10">
        {navLinks.map((link) => (
          <a
            key={link}
            href={linkHref(link)}
            onClick={() => setActive(link)}
            className={`text-sm font-medium transition-colors whitespace-nowrap ${
              active === link ? "text-[#E50914]" : "text-gray-300 hover:text-white"
            }`}
          >
            {link}
          </a>
        ))}
        <button className="text-sm font-medium text-[#E50914] whitespace-nowrap">Cosmic Tube</button>
     
     
      </div>

      {/* Right Icons - Desktop */}
      <div className="hidden md:flex ml-auto items-center gap-4">
        <button className="text-gray-300 hover:text-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <button className="text-gray-300 hover:text-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <button className="text-gray-300 hover:text-white relative">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#E50914] rounded-full"></span>
        </button>

        <a href="/profile">
           <div className="w-12 h-12 bg-red-900 rounded-lg flex items-center justify-center">
                                 <Image
                                   src="/image/profile.png"
                                   alt="profile"
                                   width={28}
                                   height={28}
                                 />
                               </div>
        </a>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-full left-0 right-0 md:hidden overflow-hidden transition-all duration-300 ${
        menuOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
      }`}>
        <div className="bg-black/95 backdrop-blur-lg border-t border-gray-800">
          <div className="flex flex-col gap-1 p-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={linkHref(link)}
                onClick={() => { setActive(link); setMenuOpen(false); }}
                className={`text-sm font-medium px-5 py-3.5 rounded-xl transition-all duration-200 ${
                  active === link
                    ? "text-[#E50914] bg-white/10 border-l-2 border-[#E50914]"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link}
              </a>
            ))}
            <button className="text-sm font-medium text-[#E50914] px-5 py-3.5 text-left rounded-xl hover:bg-white/5 transition-colors">
              Cosmic Tube
            </button>
            <hr className="border-gray-800 my-3" />
            <div className="flex items-center gap-5 px-5 py-2">
              <button className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <button className="text-gray-300 hover:text-white relative transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute top-0 -right-1 w-2 h-2 bg-[#E50914] rounded-full"></span>
              </button>
              <a href="/profile" className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 ml-auto">
                <img src="/image/profile.png" alt="Profile" className="w-full h-full object-cover" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}