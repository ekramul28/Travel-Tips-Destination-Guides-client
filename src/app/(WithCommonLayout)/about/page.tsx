import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-6 text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          About Travel Tips & Destination Guides
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Welcome to <strong>Travel Tips & Destination Guides</strong>, the
          ultimate social media platform for travelers, wanderlust enthusiasts,
          and adventure seekers! Whether youre planning your next trip,
          exploring hidden gems, or sharing your unforgettable journeys, our app
          is here to connect and inspire a global community of explorers.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          Discover personalized recommendations, travel tips from seasoned
          adventurers, and comprehensive destination guides curated by our
          passionate community. Engage with like-minded travelers, share your
          stories, and inspire others to see the world through your lens.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          At <strong>Travel Tips & Destination Guides</strong>, we believe in
          making travel accessible and memorable for everyone. From must-visit
          landmarks to off-the-beaten-path treasures, your next adventure starts
          here.
        </p>
        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Why Choose Us?
        </h3>
        <ul className="text-gray-600 list-disc list-inside mb-6">
          <li>Connect with a vibrant community of travelers.</li>
          <li>Share travel experiences and explore new destinations.</li>
          <li>Get expert tips and recommendations from seasoned explorers.</li>
          <li>Access up-to-date, curated travel guides.</li>
          <li>Plan your trips with ease and inspiration.</li>
        </ul>
        <p className="text-gray-600 leading-relaxed mb-6">
          Join us today and become part of a growing community of travel
          enthusiasts who believe that the world is best explored together.
        </p>
        <a
          href="/register"
          className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600"
        >
          Start Your Journey
        </a>
      </div>
    </section>
  );
};

export default AboutSection;
