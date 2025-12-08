import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="relative h-[40vh] bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Contact Us</h1>
        </div>
      </section>

      {/* CONTACT INFO + FORM */}
      <section className="py-14 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT - Contact Details */}
          <div>
            <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              We're here to assist you with property inquiries, bookings, and general questions.
            </p>

            <div className="space-y-6">

              <div className="flex items-start gap-4">
                <FontAwesomeIcon icon={faPhone} className="text-blue-600 text-3xl" />
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-gray-600">+234 810 718 7180</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FontAwesomeIcon icon={faEnvelope} className="text-blue-600 text-3xl" />
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-gray-600">adozienwa@gmail.com.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FontAwesomeIcon icon={faLocationDot} className="text-blue-600 text-3xl" />
                <div>
                  <h3 className="font-semibold text-lg">Office Address</h3>
                  <p className="text-gray-600">GRA Phase 2, Port Harcourt, Nigeria</p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT - Contact Form */}
          <div className="bg-white shadow-lg p-8 rounded-xl">
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>

            <form className="space-y-5">

              <div>
                <label className="text-gray-700 font-medium">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-gray-700 font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-gray-700 font-medium">Message</label>
                <textarea
                  rows="5"
                  placeholder="Write your message here..."
                  className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* MAP SECTION (OPTIONAL) */}
      <section className="w-full">
        <iframe
          title="Google Map"
          className="w-full h-[300px] md:h-[450px]"
          loading="lazy"
          allowFullScreen
          src="https://maps.google.com/maps?q=Port%20Harcourt%20GRA&t=&z=13&ie=UTF8&iwloc=&output=embed"
        ></iframe>
      </section>

    </div>
  );
}
