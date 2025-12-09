import { useParams } from "react-router-dom";
import { properties } from "../data/properties";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faBed,
  faBath,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";

export default function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find((item) => item.id === Number(id));

  if (!property) {
    return (
      <div className="p-6 text-center text-red-500 text-xl">
        Property not found.
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Main Image */}
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-72 sm:h-96 object-cover rounded-lg shadow-md"
      />

      <h1 className="text-3xl font-bold mt-6">{property.title}</h1>

      <p className="text-blue-600 font-semibold text-2xl mt-2 flex items-center gap-2">
        <FontAwesomeIcon icon={faMoneyBill} />
        {property.price}
      </p>

      <p className="flex items-center gap-2 text-gray-700 text-lg mt-3">
        <FontAwesomeIcon icon={faLocationDot} />
        {property.location}
      </p>

      {/* Features */}
      <div className="flex flex-wrap gap-6 mt-6 text-lg text-gray-700">
        <p className="flex items-center gap-2">
          <FontAwesomeIcon icon={faBed} />
          {property.bedrooms} Bedrooms
        </p>

        <p className="flex items-center gap-2">
          <FontAwesomeIcon icon={faBath} />
          {property.bathrooms} Bathrooms
        </p>
      </div>

      {/* Description */}
      <p className="mt-6 text-gray-700 leading-relaxed">
        This beautiful property offers luxury living in one of the most
        sought-after neighborhoods. Spacious rooms, modern design, and a serene
        environment make it perfect for family living or investment.
      </p>

      {/* Contact CTA */}
      <a
        href="https://wa.me/2348107187180?text=Hello,%20I%20want%20a%20real%20estate%20website."
        target="_blank"
        className="mt-6 inline-block text-white bg-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-blue-400 transition"
      >
        Contact Agent
      </a>
    </div>
  );
}
