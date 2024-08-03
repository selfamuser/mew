

// import { useRef } from 'react';
// import 'slick-carousel/slick/slick-theme.css';
// import 'slick-carousel/slick/slick.css';
// import image1 from '../assets/Home/image1.jpg';
// import image2 from '../assets/Home/image2.jpg';
// import image3 from '../assets/Home/image3.jpg';
// // import image4 from '../assets/Home/image4.png';
// import backgroundImage from '../assets/Background/img1.jpg'; // Add your background image here
// import { default as heroImg } from '../assets/logo-new-home.jpeg';
// import HomeContent from '../components/HomeContent';
// import TopProducts from '../components/TopProducts';
// import TrustedClients from '../components/TrustedClients'; // Import the TrustedClients component

// function HomeTest() {
//   const sectionRef = useRef(null);

//   const handleExploreClick = () => {
//     sectionRef.current.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <div className='bg-gray-800 min-h-screen'>
//       <div
//         className="relative overflow-hidden h-screen flex flex-col md:flex-row"
//         style={{
//           backgroundImage: `url(${backgroundImage})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center'
//         }}
//       >
//         {/* Image Container */}
//         <div className="relative w-full md:w-1/2 flex justify-center items-center bg-gray-800 bg-opacity-50">
//           <div className="w-2/3 md:w-1/2 h-auto rounded-full overflow-hidden">
//             <img
//               src={heroImg}
//               alt="Company Background"
//               className="object-contain w-full h-full rounded-lg shadow-lg rotating"
//               loading="lazy"
//             />
//           </div>
//         </div>

//         {/* Content */}
//         <div className="relative w-full md:w-1/2 flex flex-col justify-center items-center bg-gray-800 bg-opacity-50 text-white z-20 p-8 md:p-16">
//           <div className="w-full max-w-md text-center md:text-left">
//             <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-8">
//               Welcome to <span className="text-yellow-500">Mahoon Engineering Works</span>
//             </h1>
//             <p className="text-lg mb-8">
//               Excelling Engineering Everyday.
//             </p>
//             <button
//               className="bg-yellow-500 text-gray-800 font-semibold py-3 px-8 rounded-full hover:bg-yellow-600 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 shadow-lg"
//               onClick={handleExploreClick}
//             >
//               Explore Here
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Top Products Section */}
//       <TopProducts />

//       <section ref={sectionRef} className="bg-gray-800 py-16">
//         <div className="container mx-auto">
//           <h2 className="text-4xl font-bold text-center mb-8 text-white">
//             Welcome to Our World of Engineering
//           </h2>
//           <div className="grid grid-cols-1 gap-16">
//             {/* Image on left, text on right */}
//             <div className="md:flex md:items-center">
//               <div className="md:w-1/2 flex justify-center md:justify-end p-4">
//                 <img
//                   src={image1}
//                   alt="Image 1"
//                   className="w-3/4 rounded-lg border-4 border-white"
//                 />
//               </div>
//               <div className="md:w-1/2 text-center text-white p-4">
//                 <HomeContent />
//               </div>
//             </div>
//             {/* Image on right, text on left */}
//             <div className="md:flex md:items-center md:flex-row-reverse">
//               <div className="md:w-1/2 flex justify-center md:justify-start p-4">
//                 <img
//                   src={image2}
//                   alt="Image 2"
//                   className="w-3/4 rounded-lg border-4 border-white"
//                 />
//               </div>
//               <div className="md:w-1/2 text-center text-white p-4">
//                 <HomeContent />
//               </div>
//             </div>
//             {/* Image on left, text on right */}
//             <div className="md:flex md:items-center">
//               <div className="md:w-1/2 flex justify-center md:justify-end p-4">
//                 <img
//                   src={image3}
//                   alt="Image 3"
//                   className="w-3/4 rounded-lg border-4 border-white"
//                 />
//               </div>
//               <div className="md:w-1/2 text-center text-white p-4">
//                 <HomeContent />
//               </div>
//             </div>
//             {/* Image on right, text on left */}
//             {/* <div className="md:flex md:items-center md:flex-row-reverse">
//               <div className="md:w-1/2 flex justify-center md:justify-start p-4">
//                 <img
//                   src={image4}
//                   alt="Image 4"
//                   className="w-3/4 rounded-lg border-4 border-white"
//                 />
//               </div>
//               <div className="md:w-1/2 text-center text-white p-4">
//                 <HomeContent />
//               </div>
//             </div> */}
//           </div>
//         </div>
//       </section>

//       {/* Trusted Clients Section */}
//       <TrustedClients />
//     </div>
//   );
// }

// export default HomeTest;

import { useRef } from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import image1 from '../assets/Home/image1.jpg';
import image2 from '../assets/Home/image2.jpg';
import image3 from '../assets/Home/image3.jpg';
// import image4 from '../assets/Home/image4.png';
import backgroundImage from '../assets/Background/img1.jpg'; // Add your background image here
import Certificates from '../components/Certficates.jsx';
import HomeContent from '../components/HomeContents/HomeContent.jsx';
import HomeContent2 from '../components/HomeContents/HomeContent2.jsx';
import HomeContent3 from '../components/HomeContents/HomeContent3.jsx';
import TopProducts from '../components/TopProducts';
import TrustedClients from '../components/TrustedClients'; // Import the TrustedClients component

function Home() {
  const sectionRef = useRef(null);

  const handleExploreClick = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='bg-gray-800 min-h-screen'>
      <div
        className="relative overflow-hidden h-screen flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Content */}
        <div className="relative text-white text-center z-20 p-8 md:p-16 bg-gray-800 bg-opacity-0">
          <h1 className="text-7xl md:text-7xl font-bold mb-4 md:mb-8 text-orange-500">
            Welcome to
          </h1>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 md:mb-8 text-white-500">
            MAHOON ENGINEERING WORKS
          </h1>
          <p className="text-2xl mb-8 font-bold text-white">
            Excelling Engineering Everyday.
          </p>
          <button
            className="bg-yellow-400 text-gray-800 font-semibold py-3 px-8 rounded-full hover:bg-yellow-600 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 shadow-lg"
            onClick={handleExploreClick}
          >
            Explore Here
          </button>
        </div>
      </div>

      {/*Certificates*/}

      {/* Top Products Section */}

      <TopProducts />


      <section ref={sectionRef} className="bg-gray-800 py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-white">
            Who We Are
          </h2>
          <div className="grid grid-cols-1 gap-16">
            {/* Image on left, text on right */}
            <div className="md:flex md:items-center">
              <div className="md:w-1/2 flex justify-center md:justify-end p-4">
                <img
                  src={image1}
                  alt="Image 1"
                  className="w-3/4 rounded-lg border-4 border-white"
                />
              </div>
              <div className="md:w-1/2 text-center text-white p-4">
                <HomeContent />
              </div>
            </div>
            {/* Image on right, text on left */}
            <div className="md:flex md:items-center md:flex-row-reverse">
              <div className="md:w-1/2 flex justify-center md:justify-start p-4">
                <img
                  src={image2}
                  alt="Image 2"
                  className="w-3/4 rounded-lg border-4 border-white"
                />
              </div>
              <div className="md:w-1/2 text-center text-white p-4">
                <HomeContent2 />
              </div>
            </div>
            {/* Image on left, text on right */}
            <div className="md:flex md:items-center">
              <div className="md:w-1/2 flex justify-center md:justify-end p-4">
                <img
                  src={image3}
                  alt="Image 3"
                  className="w-3/4 rounded-lg border-4 border-white"
                />
              </div>
              <div className="md:w-1/2 text-center text-white p-4">
                <HomeContent3 />
              </div>
            </div>

          </div>
        </div>
      </section>
      <Certificates />

      {/* Trusted Clients Section */}
      <TrustedClients />
    </div>
  );
}

export default Home;

