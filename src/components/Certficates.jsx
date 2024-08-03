import img1 from '../assets/Home/image1.jpg';

const certificates = [
  { id: 1, src: img1, alt: 'Certificate 1' },
  { id: 2, src: img1, alt: 'Certificate 2' },
  { id: 3, src: img1, alt: 'Certificate 3' },
  // Add more certificates as needed
];

const Certificates = () => {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">My Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate) => (
            <div key={certificate.id} className="border rounded-lg overflow-hidden shadow-lg">
              <img src={certificate.src} alt={certificate.alt} className="w-full h-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;