


import image1 from '../assets/clients/c1.jpeg';
import image10 from '../assets/clients/c10.png';
import image2 from '../assets/clients/c2.jpeg';
import image3 from '../assets/clients/c3.jpg';
import image4 from '../assets/clients/c4.jpeg';
import image5 from '../assets/clients/c5.jpeg';
import image6 from '../assets/clients/c6.png';
import image7 from '../assets/clients/c7.jpeg';
import image8 from '../assets/clients/c8.jpeg';
import image9 from '../assets/clients/c9.jpeg';

const TrustedClients = () => {
  const clients = [
    { logo: image1 },
    { logo: image2 },
    { logo: image3 },
    { logo: image4 },
    { logo: image5 },
    { logo: image6 },
    { logo: image7 },
    { logo: image8 },
    { logo: image9 },
    { logo: image10 },

  ];

  return (
    <section className="bg-gray-900 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">
          Our Trusted Clients
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center">
          {clients.slice(0, 5).map((client, index) => (
            <div
              key={index}
              className="bg-white py-4 px-2 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <img
                src={client.logo}
                alt={`Client ${index + 1} logo`}
                className="w-full h-24 mx-auto object-contain"
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center mt-8">
          {clients.slice(5).map((client, index) => (
            <div
              key={index}
              className="bg-white py-4 px-2 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <img
                src={client.logo}
                alt={`Client ${index + 6} logo`}
                className="w-full h-24 mx-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;