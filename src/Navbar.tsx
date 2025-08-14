import React from "react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="shrink-0">
          <img src="/mylogo2.png" alt="Logo" className="h-8 w-auto" />
        </a>

        {/* Right side navigation */}
        <nav className="flex items-center gap-5">
          <a href="#work" className="font-medium hover:opacity-70">Work</a>
          <a href="#about" className="font-medium hover:opacity-70">About</a>
          <a
            href="#contact"
            className="font-medium hover:opacity-70 border border-black rounded-full px-3 py-2"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
