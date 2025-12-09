import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseCircleCheck,
  faUsers,
  faBolt,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";

const values = [
  {
    text: "Showcase your listings professionally",
    icon: faHouseCircleCheck,
  },
  {
    text: "Build trust with potential buyers",
    icon: faUsers,
  },
  {
    text: "Instant customer inquiries",
    icon: faBolt,
  },
  {
    text: "Fast and mobile-friendly",
    icon: faMobileScreenButton,
  },
];

export default function ValueCards() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Our Platform?
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {values.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm border border-blue-600
                         flex flex-col items-center text-center
                         group hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              {/* Icon */}
              <div
                className="w-14 h-14 flex items-center justify-center 
                              bg-blue-600 text-white rounded-full text-2xl mb-4 
                              group-hover:bg-indigo-600 transition"
              >
                <FontAwesomeIcon icon={item.icon} />
              </div>

              {/* Text */}
              <p className="text-gray-800 font-semibold text-lg">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
