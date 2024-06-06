import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import ChooseUs from '../components/ChooseUs';
import Expertise from '../components/Expertise';
import GetInTouch from '../components/GetInTouch';
import Mission from '../components/Mission';
import Services from '../components/Services';

const About = () => {
  return (
    <div className="bg-gray-800 min-h-screen flex flex-col justify-between">
      <div className="container mx-auto py-12">
        <div className="max-w-4xl mx-auto px-4 text-white">
          <section className="mb-16">
            <Mission />
            <Services />
            <Expertise />
          </section>

          <ChooseUs />

          <GetInTouch />

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
