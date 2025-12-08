export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20 py-10">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <p className="text-gray-400 mb-2">
          © {new Date().getFullYear()} Real Estate Demo Website. All Rights Reserved.
        </p>

        <p className="text-gray-500">
          Demo built by <span className="text-blue-400">Augustine — Web Developer</span>.
        </p>

      </div>
    </footer>
  );
}
