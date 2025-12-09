export default function Hero() {
  return (
    <section
      className="relative w-full h-[80vh] bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/1200x/e6/cb/c6/e6cbc604721f139f9067dfd63ceaf886.jpg')",
      }}
    >
      {/* Gradient overlay to allow the image to show through but keep text readable */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.32) 35%, rgba(0,0,0,0.56) 100%), linear-gradient(180deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.42) 60%, rgba(0,0,0,0.7) 100%)",
        }}
      />

      <div className="relative w-full h-full flex flex-col justify-center px-6 md:px-20 z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white max-w-2xl">
          Find Your Next Home in Port Harcourt
        </h1>

        <p className=" text-lg md:text-xl text-gray-200 mt-4 max-w-xl">
          Clean, Modern Property Listing Website Demo for Real Estate
          Businesses.
        </p>

        <a
          href="/properties"
          className="text-center max-w-50 mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
        >
          View Properties
        </a>
      </div>
    </section>
  );
}
