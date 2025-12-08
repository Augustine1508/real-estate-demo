export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-10">Why Choose This Demo</h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="p-6 shadow-md rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Modern Design</h3>
            <p className="text-gray-600">
              Clean, modern UI built to impress real estate clients instantly.
            </p>
          </div>

          <div className="p-6 shadow-md rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Easy Property Management</h3>
            <p className="text-gray-600">Add, edit, and manage property listings smoothly.</p>
          </div>

          <div className="p-6 shadow-md rounded-xl">
            <h3 className="text-xl font-semibold mb-2">WhatsApp Integration</h3>
            <p className="text-gray-600">
              Clients can contact you instantly using built-in WhatsApp CTAs.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
