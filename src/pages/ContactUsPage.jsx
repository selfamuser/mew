
import { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    recipient: 'info@mahoonenggworks.com' // Default recipient email
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, message, recipient } = formData;
    const mailtoLink = `mailto:${recipient}?subject=Contact%20Form%20Submission&body=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0APhone:%20${encodeURIComponent(phone)}%0AMessage:%20${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="bg-gray-800 min-h-screen flex items-center justify-center ">
      <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 container mx-auto px-8 py-12 bg-gray-900 rounded-lg shadow-xl flex flex-col md:flex-row  mt-2 mb-2 animate-fadeIn">
        {/* Left Section - Contact Form */}
        <div className="md:w-1/2 md:pr-8">
          <h2 className="text-3xl font-bold mb-6 text-white">Send us an Enquiry</h2>
          <form onSubmit={handleSubmit} className="rounded-lg border border-gray-800 p-6 space-y-6 bg-gray-800">
            <div>
              <label htmlFor="name" className="block text-gray-200">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input mt-1 block w-full border-gray-700 rounded-md focus:border-yellow-500 focus:ring-yellow-500 bg-gray-700 text-gray-200"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-200">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input mt-1 block w-full border-gray-700 rounded-md focus:border-yellow-500 focus:ring-yellow-500 bg-gray-700 text-gray-200"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-200">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-input mt-1 block w-full border-gray-700 rounded-md focus:border-yellow-500 focus:ring-yellow-500 bg-gray-700 text-gray-200"
                placeholder="Your Phone Number"
                required
              />
            </div>
            <div>
              <label htmlFor="recipient" className="block text-gray-200">Recipient</label>
              <select
                id="recipient"
                name="recipient"
                value={formData.recipient}
                onChange={handleChange}
                className="form-select mt-1 block w-full border-gray-700 rounded-md focus:border-yellow-500 focus:ring-yellow-500 bg-gray-700 text-gray-200"
                required
              >
                <option value="mitarthmahoon@mahoonenggworks.com">info@mahoonenggworks.com</option>

              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-200">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="form-textarea mt-1 block w-full border-gray-700 rounded-md focus:border-yellow-500 focus:ring-yellow-500 bg-gray-700 text-gray-200"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button type="submit" className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition-colors duration-300">Send Enquiry</button>
          </form>
        </div>

        {/* Right Section - Contact Information and Map */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <div className="bg-gray-800 rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-3xl font-bold mb-4 text-white">Contact Information</h2>
            {/* <div className="flex items-center mb-4">
              <FaPhone className="text-yellow-500 mr-2" />
              <div>
                <span className="text-gray-200 ml-2">123-456-7890</span>
              </div>
            </div> */}
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-yellow-500 mr-2" />
              <div>
                <span className="text-gray-200 ml-2">info@mahoonenggworks.com</span>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <FaPhone className="text-yellow-500 mr-2" />
              <div>
                <span className="text-gray-200 ml-2">+91 7838-965-862</span>
              </div>
            </div>
            {/* <div className="flex items-center mb-4">
              <FaEnvelope className="text-yellow-500 mr-2" />
              <div>
                <span className="text-gray-200 ml-2">pritpalmahoon@mahoonengg-works.com</span>
              </div>
            </div> */}
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-yellow-500 mr-2" />
              <div>
                <span className="text-gray-200 ml-2">Plot No- 104/10, Block A, Wazirpur Industrial Area, Delhi-110052</span>
              </div>
            </div>
          </div>
          <div className="relative bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="h-72">
              <iframe
                src="https://maps.google.com/maps?width=100%25&amp;height=1000&amp;hl=en&amp;q=Block%20A%20Wazirpur%20Industrial%20Area%20New%20Delhi+(Mahoon%20Engineering%20Works)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                title="Map"
                allowFullScreen=""
                loading="lazy"
                className="w-full h-full rounded-lg"
              >
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
