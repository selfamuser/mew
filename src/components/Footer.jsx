import { Link } from 'react-router-dom';
import logo from '../assets/logoTM.jpeg';

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-4 w-full border-t border-gray-600">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">

        {/* Logo Section */}
        <div className="flex items-center mb-2 md:mb-0">
          <img src={logo} alt="Logo" className="w-14 h-14 mr-2" />
          <span className="font-bold text-lg text-white">Mahoon Engineering Works&trade;</span>
        </div>

        {/* Links Section */}
        <div className="flex flex-wrap justify-center space-x-4 text-white">
          <Link to="/" className="hover:text-yellow-500 transition duration-300">Home</Link>
          <Link to="/about" className="hover:text-yellow-500 transition duration-300">About</Link>
          <Link to="/catalog" className="hover:text-yellow-500 transition duration-300">Catalog</Link>
          <Link to="/contact" className="hover:text-yellow-500 transition duration-300">Contact</Link>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="container mx-auto mt-6 px-4 flex flex-col items-center space-y-4 text-white">
        <p className="text-center text-gray-400 text-sm">© {new Date().getFullYear()} Mahoon Engineering Works. All rights reserved.</p>
      </div>
    </footer>
  );
}



