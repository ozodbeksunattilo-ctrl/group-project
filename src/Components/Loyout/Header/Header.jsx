import React from 'react'
function Header() {
  return (
    <header className="bg-slate-950 text-white border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
      <h1 className="text-3xl font-bold text-cyan-400">
  BE Project 🚀
</h1>

        <ul className="hidden md:flex gap-8 font-medium">
          <li className="hover:text-cyan-400 duration-300 cursor-pointer">
            Home
          </li>
          <li className="hover:text-cyan-400 duration-300 cursor-pointer">
            Services
          </li>
          <li className="hover:text-cyan-400 duration-300 cursor-pointer">
            About
          </li>
          <li className="hover:text-cyan-400 duration-300 cursor-pointer">
            Contact
          </li>
        </ul>

        <button className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg duration-300">
          Get Started
        </button>
      </div>
    </header>
  );
}

export default Header;