import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faHandshake,
  faBuilding,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="relative h-[50vh] w-full bg-cover bg-center" 
       style={{ backgroundImage: "url('https://videos.openai.com/az/vg-assets/task_01kbzbvx7netx9qwxs18t8p7cp%2F1765210536_img_0.webp?se=2025-12-14T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-12-08T02%3A18%3A19Z&ske=2025-12-15T02%3A23%3A19Z&sks=b&skv=2024-08-04&sig=437TkR4ZJFI%2BZI51/nVmB4wbJ3vALPhwVuDiBIIUhTw%3D&ac=oaivgprodscus2')" }}>
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">About Us</h1>
          <p className="text-white text-lg mt-3">Your Trusted Partner in Real Estate</p>
          <a
        href="https://wa.me/2348107187180?text=Hello,%20I%20want%20a%20real%20estate%20website."
        target="_blank"
        className="mt-6 inline-block bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
      >
        Contact Developer
      </a>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-12 px-5 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed text-[17px]">
         This demo website was created to show real estate companies how a modern and professional website can transform their online presence
        <br />
        Many real estate businesses in Port Harcourt rely only on WhatsApp and social media, missing out on clients who want a clean and reliable place to browse properties.
        </p>
      </section>

      {/* VALUE CARDS */}
      <section className="py-12 bg-gray-100 px-5">
        <h2 className="text-3xl font-semibold text-center mb-8">What We Stand For</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <FontAwesomeIcon icon={faHandshake} className="text-blue-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Trust & Integrity</h3>
            <p className="text-gray-600 text-[15px]">
              We build long-lasting relationships through honesty and transparency.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <FontAwesomeIcon icon={faBuilding} className="text-blue-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quality Service</h3>
            <p className="text-gray-600 text-[15px]">
              We ensure top-quality service in all real estate transactions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <FontAwesomeIcon icon={faUsers} className="text-blue-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Client First</h3>
            <p className="text-gray-600 text-[15px]">
              Your satisfaction is always our top priority.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <FontAwesomeIcon icon={faCheckCircle} className="text-blue-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Professionalism</h3>
            <p className="text-gray-600 text-[15px]">
              Our team consists of highly skilled and experienced professionals.
            </p>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-14 px-6 bg-blue-600 text-center text-white">
        <h2 className="text-3xl font-semibold">Ready to Find Your Dream Property?</h2>
        <p className="mt-2 text-lg">Our agents are always ready to guide you.</p>

        <a
          href="/properties"
          className="mt-5 inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Browse Properties
        </a>
      </section>

    </div>
  );
};

export default About;
