import { useRef } from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import image1 from '../assets/Home/image1.jpeg';
import image2 from '../assets/Home/image2.jpeg';
import image3 from '../assets/Home/image3.jpeg';
import image4 from '../assets/Home/image4.png';
import { default as heroImg } from '../assets/logoTM.jpeg';
import HomeContent from '../components/HomeContent';

function Home() {
  const sectionRef = useRef(null);

  const handleExploreClick = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='bg-gray-800 min-h-screen'>
      <div className="relative overflow-hidden h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Company" className="object-center w-full h-full" />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center z-20">
          <h1 className="text-white text-5xl font-bold text-center mb-8">Welcome to Mahoon Enginnering Works</h1>
          <button className="bg-yellow-500 text-gray-800 font-semibold py-3 px-8 rounded-full hover:bg-yellow-600 transition-colors duration-200 ease-in-out" onClick={handleExploreClick}>Explore Here</button>
        </div>
      </div>
      {/* <section ref={sectionRef} className="bg-gray-800 py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-white">
            Welcome to Our World of Engineering
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center justify-center">
              <div className="square-container">
                <img src={image1} alt="Image 1" className="square-image" />
                <img src={image2} alt="Image 2" className="square-image" />
                <img src={image3} alt="Image 3" className="square-image" />
                <img src={image4} alt="Image 4" className="square-image" />
              </div>
            </div>
            <HomeContent />
          </div>
        </div>
      </section> */}
      <section ref={sectionRef} className="bg-gray-800 py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-white">
            Welcome to Our World of Engineering
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
                <HomeContent />
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
                <HomeContent />
              </div>
            </div>
            {/* Image on right, text on left */}
            <div className="md:flex md:items-center md:flex-row-reverse">
              <div className="md:w-1/2 flex justify-center md:justify-start p-4">
                <img
                  src={image4}
                  alt="Image 4"
                  className="w-3/4 rounded-lg border-4 border-white"
                />
              </div>
              <div className="md:w-1/2 text-center text-white p-4">
                <HomeContent />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
