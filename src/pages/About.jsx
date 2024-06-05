import { FaGlobe, FaIndustry, FaLightbulb } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

const About = () => {
  return (
    <div className="bg-gray-700 min-h-screen flex flex-col justify-between">
      <div className="container mx-auto py-12">
        <div className="max-w-4xl mx-auto px-4 text-white">
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl mb-8">
              What We Offer:
            </p>
            <ul className="list-disc ml-8 mb-8">
              <li className="text-lg mb-4">Custom Engineering Solutions: Tailored to meet each clients specific needs, our engineering solutions are designed to enhance performance and productivity.</li>
              <li className="text-lg mb-4">Research and Development: Our R&D team continuously explores new techniques and materials to stay ahead of industry advancements.</li>
              <li className="text-lg">Quality Assurance: To guarantee excellence, we integrate the best testing and quality control measures into all stages of our manufacturing process.</li>
            </ul>
            <h3 className="text-2xl font-bold mb-4">Our Expertise</h3>
            <p className="text-lg mb-8">
              With a diverse portfolio spanning various industries, including railways, automotive, machinery components and more, Mahoon Engineering Works has the expertise and resources to tackle the most challenging engineering and manufacturing projects. Our skilled professionals have the knowledge and tools to deliver innovative solutions that propel your business forward.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Choose Us?</h2>
            <ul className="list-disc ml-8 mb-8">
              <li className="flex items-center mb-4 text-lg">
                <FaLightbulb className="text-yellow-500 mr-2" />
                <span>Innovation driven: We embrace the latest technological advancements to provide innovative solutions.</span>
              </li>
              <li className="flex items-center mb-4 text-lg">
                <FaIndustry className="text-yellow-500 mr-2" />
                <span>Customer-Centric: Our approach is centred around understanding and fulfilling the unique needs of our clients.</span>
              </li>
              <li className="flex items-center text-lg">
                <FaGlobe className="text-yellow-500 mr-2" />
                <span>Global Reach: With a presence in key markets worldwide, we offer our services globally.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-lg mb-8">
              Partner with Mahoon Engineering Works to leverage the full potential of advanced engineering and manufacturing. Contact us today to learn how we can help you achieve your goals and drive your vision into reality.
            </p>
            <p className="text-lg">
              Thank you for considering Mahoon Engineering Works for your engineering and manufacturing needs. We look forward to collaborating with you on your next project.
            </p>
          </section>
        </div>
      </div>
      <div className="flex justify-center mb-12">
        <Link to="/contact">
          <button className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 animate-fade-in-up">Contact Us</button>
        </Link>
      </div>
    </div>
  );
};

export default About;
