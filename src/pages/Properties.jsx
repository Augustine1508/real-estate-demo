import { Link } from "react-router-dom";
import { properties } from "../data/properties";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faBed,
  faBath,
} from "@fortawesome/free-solid-svg-icons";

export default function Properties() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6">Available Properties</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <Link
            to={`/property/${property.id}`}
            key={property.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition"
          >
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-52 object-cover rounded-t-lg"
            />

            <div className="p-4">
              <h3 className="text-xl font-semibold">{property.title}</h3>

              <p className="text-blue-600 font-bold text-lg mt-1">
                {property.price}
              </p>

              <p className="flex items-center gap-2 text-gray-600 mt-2">
                <FontAwesomeIcon icon={faLocationDot} />
                {property.location}
              </p>

              <div className="flex items-center gap-4 mt-3 text-gray-700">
                <p className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faBed} /> {property.bedrooms} Beds
                </p>
                <p className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faBath} /> {property.bathrooms} Baths
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
