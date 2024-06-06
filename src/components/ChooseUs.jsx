import { FaGlobe, FaIndustry, FaLightbulb } from 'react-icons/fa';

function ChooseUs() {
  return (
    <div className="bg-gray-700 p-6 rounded-lg mb-8 animate-fadeIn">
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-6 text-yellow-500">Why Choose Us?</h2>
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
    </div>
  )
}

export default ChooseUs
