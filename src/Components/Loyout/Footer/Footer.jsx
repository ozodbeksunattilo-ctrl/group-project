import React from 'react'

function Footer() {
  return (
    <footer className="bg-black text-white py-14">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-3xl font-bold text-cyan-400">
            BE Project
          </h2>

          <p className="text-gray-400 mt-4">
            Professional backend development platform for modern applications.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-cyan-400 cursor-pointer">Home</li>
            <li className="hover:text-cyan-400 cursor-pointer">Services</li>
            <li className="hover:text-cyan-400 cursor-pointer">About</li>
            <li className="hover:text-cyan-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-5">
            Contact
          </h3>

          <p className="text-gray-400">Email: info@beproject.com</p>
          <p className="text-gray-400 mt-2">Phone: +998 90 123 45 67</p>
          <p className="text-gray-400 mt-2">Tashkent, Uzbekistan</p>
        </div>

      </div>

      <div className="border-t border-slate-800 mt-10 pt-6 text-center text-gray-500">
        © 2026 BE Project. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;