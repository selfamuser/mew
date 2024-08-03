
// // import { Link } from 'react-router-dom';
// // import logo from '../assets/logoTM.jpeg'; // Add your logo image here

// // function Footer() {
// //   return (
// //     <footer className="bg-gray-900 text-white py-8">
// //       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
// //         {/* Logo Section */}
// //         <div className="flex-shrink-0 mb-4 md:mb-0">
// //           <img src={logo} alt="Company Logo" className="w-48 h-auto" /> {/* Increased size */}
// //         </div>

// //         {/* Links Section */}
// //         <div className="flex flex-col items-center md:items-end mb-4 md:mb-0 md:flex-row md:space-x-8">
// //           <nav className="flex flex-row space-x-4 md:space-x-8">
// //             <Link to="/" className="hover:text-yellow-500 transition duration-300">Home</Link>
// //             <Link to="/about" className="hover:text-yellow-500 transition duration-300">About</Link>
// //             <Link to="/catalog" className="hover:text-yellow-500 transition duration-300">Catalog</Link>
// //             <Link to="/contact" className="hover:text-yellow-500 transition duration-300">Contact</Link>
// //           </nav>
// //         </div>
// //       </div>

// //       {/* Center Section */}
// //       <div className="text-center mt-4">
// //         <h2 className="text-2xl font-bold">Mahoon Engineering Works</h2>
// //         <p className="mt-2">All rights reserved © {new Date().getFullYear()}</p>
// //       </div>
// //     </footer>
// //   );
// // }

// // export default Footer;

// import { Link } from 'react-router-dom';
// import logo from '../assets/logoTM.jpeg'; // Add your logo image here

// function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white py-8">
//       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
//         {/* Logo Section */}
//         <div className="flex-shrink-0 mb-4 md:mb-0">
//           <img src={logo} alt="Company Logo" className="w-48 h-auto transition-transform duration-300 transform hover:scale-110" />
//         </div>

//         {/* Links Section */}
//         <div className="flex flex-col items-center md:items-end mb-4 md:mb-0 md:flex-row md:space-x-8">
//           <nav className="flex flex-row space-x-4 md:space-x-8">
//             <Link to="/" className="hover:text-yellow-500 transition duration-300">Home</Link>
//             <Link to="/about" className="hover:text-yellow-500 transition duration-300">About</Link>
//             <Link to="/catalog" className="hover:text-yellow-500 transition duration-300">Catalog</Link>
//             <Link to="/contact" className="hover:text-yellow-500 transition duration-300">Contact</Link>
//           </nav>
//         </div>
//       </div>

//       {/* Center Section */}
//       <div className="text-center mt-4">
//         <h2 className="text-2xl font-bold">Mahoon Engineering Works</h2>
//         <p className="mt-2 text-gray-400">All rights reserved © {new Date().getFullYear()}</p>
//       </div>

//       {/* Decorative Bottom Line */}
//       <div className="border-t border-gray-700 mt-6">
//         <div className="container mx-auto flex justify-center py-2">
//           <p className="text-gray-500 text-sm">Designed with precision by Utkarsh Shukla. Work- utkshukla9@gmail.com</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

// // import { Link } from 'react-router-dom';
// // import logo from '../assets/logoTM.jpeg'; // Add your logo image here

// // function Footer() {
// //   return (
// //     <footer className="bg-gray-800 text-white py-10">
// //       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
// //         {/* Logo Section */}
// //         <div className="flex-shrink-0 mb-6 md:mb-0">
// //           <img src={logo} alt="Company Logo" className="w-36 h-auto transition-transform duration-300 transform hover:scale-105" />
// //         </div>

// //         {/* Links Section */}
// //         <div className="flex flex-col items-center md:flex-row md:space-x-8">
// //           <nav className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-8 text-center">
// //             <Link to="/" className="hover:text-yellow-500 transition duration-300">Home</Link>
// //             <Link to="/about" className="hover:text-yellow-500 transition duration-300">About</Link>
// //             <Link to="/catalog" className="hover:text-yellow-500 transition duration-300">Catalog</Link>
// //             <Link to="/contact" className="hover:text-yellow-500 transition duration-300">Contact</Link>
// //           </nav>
// //         </div>
// //       </div>

// //       {/* Decorative Divider */}
// //       <div className="border-t border-gray-700 mt-8"></div>

// //       {/* Center Section */}
// //       <div className="text-center mt-6">
// //         <h2 className="text-2xl font-semibold mb-2">Mahoon Engineering Works</h2>
// //         <p className="text-gray-400">All rights reserved © {new Date().getFullYear()}</p>
// //       </div>
// //     </footer>
// //   );
// // }

// // export default Footer;


import { Link } from 'react-router-dom';
import logo from '../assets/logoTM.jpeg';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left side */}
        <div className="flex items-center mb-4 md:mb-0">
          <img src={logo} alt="Company Logo" className="h-12 w-12 mr-3" />
          <p className="text-sm">
            Your companys description goes here. Providing excellent services since [Year].
          </p>
        </div>

        {/* Center */}
        <div className="mb-4 md:mb-0 text-center">
          <h1 className="text-xl font-bold">Brand Name</h1>
        </div>

        {/* Right side */}
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/about" className="hover:text-gray-400">About</Link>
          <Link to="/contact" className="hover:text-gray-400">Contact</Link>
          <Link to="/catalog" className="hover:text-gray-400">Catalog</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;