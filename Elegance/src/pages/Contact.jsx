import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    message: '',
  });

  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = 'https://formspree.io/f/yourFormID'; // Replace with your actual Formspree ID

    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', mobile: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-500 to-blue-400 text-white py-4">
      {/* Heading */}
      <div className="text-center py-10 px-4">
        <h1 className="text-2xl font-bold mb-4">ELEGANCEGEOINFOTECH</h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-100">
          Connect with us for software development, training programs, or placement services. Our team is ready to assist with your inquiries and collaboration proposals.
        </p>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col md:flex-row max-w-5xl mx-auto bg-white text-gray-800 rounded-xl shadow-lg overflow-hidden">
        {/* Left Card */}
        <div className="md:w-1/2 bg-teal-600 text-white p-8">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-6 leading-relaxed">
            We’d love to hear from you. Whether you have a question or just want to say hi, feel free to reach out.
          </p>
          <div className="space-y-4 text-sm">
            <div>
              <strong>📍 Address:</strong><br />
              EleganceGeoInfoTech, Thippampatti, Dharmapuri, Tamilnadu, India
            </div>
            <div>
              <strong>📞 Phone:</strong><br />
              <a href="tel:+916369126125" className="text-yellow-300 hover:text-yellow-100 font-semibold">+91 6369126125</a><br />
              <a href="tel:+" className="text-yellow-300 hover:text-yellow-100 font-semibold">

                 
              </a>
            </div>
            <div>
              <strong>📧 Email:</strong><br />
              <a href="mailto:EleganceGeoInfoTech@gmail.com" className="text-yellow-300 hover:text-yellow-100 font-semibold">EleganceGeoInfoTech@gmail.com</a>
            </div>
          </div>
        </div>

        {/* Right Card (Form) */}
        <div className="md:w-1/2 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
              <input
                type="tel"
                name="mobile"
                required
                pattern="[0-9]{10}"
                maxLength={10}
                value={formData.mobile}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                name="message"
                required
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            {status === 'success' && <div className="text-green-600 font-medium">Message sent successfully!</div>}
            {status === 'error' && <div className="text-red-600 font-medium">Something went wrong. Try again.</div>}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg font-bold text-white transition duration-300 ${
                loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
