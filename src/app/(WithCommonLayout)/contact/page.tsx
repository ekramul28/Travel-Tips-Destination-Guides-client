/* eslint-disable react/jsx-sort-props */
/* eslint-disable react/self-closing-comp */
import React from "react";

const ContactSection = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-6 text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Get in Touch with Us
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          We’d love to hear from you! Whether you have a question about our
          platform, need assistance, or just want to share your feedback, feel
          free to reach out to us. Our team is here to help!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form className="bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-700"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Write your message here..."
                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>

          {/* Contact Information */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Contact Information
            </h3>
            <p className="text-gray-600 mb-4">
              If youd prefer, you can also contact us directly through the
              information below.
            </p>
            <ul className="text-gray-600">
              <li className="mb-2">
                📧 <strong>Email:</strong>{" "}
                <a
                  href="mailto:support@traveltips.com"
                  className="text-blue-500 hover:underline"
                >
                  mdekramulhassan168@gmail.com
                </a>
              </li>
              <li className="mb-2">
                📞 <strong>Phone:</strong> +8801762477828
              </li>
              <li className="mb-2">
                📍 <strong>Address:</strong> jessore , bangladesh Country
              </li>
              <li className="mb-2">
                🕒 <strong>Working Hours:</strong> Mon-Fri, 9 AM - 6 PM
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
