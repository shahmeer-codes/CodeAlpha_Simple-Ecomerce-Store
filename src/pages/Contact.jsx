import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Have questions about our products or services? We'd love to hear
            from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>

            <form className="space-y-5">
              <div>
                <label className="block mb-2 font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-slate-900"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-slate-900"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Order Inquiry"
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-slate-900"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-slate-900"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-slate-900 text-white py-3 rounded-xl hover:bg-slate-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-2xl" />
                <div>
                  <h3 className="font-bold text-xl">Email</h3>
                  <p className="text-slate-600">
                    support@yourstore.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-2xl" />
                <div>
                  <h3 className="font-bold text-xl">Phone</h3>
                  <p className="text-slate-600">
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-2xl" />
                <div>
                  <h3 className="font-bold text-xl">Address</h3>
                  <p className="text-slate-600">
                    123 Business Street, New York, NY 10001
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 text-white p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-3">
                Business Hours
              </h3>

              <p className="text-slate-300">
                Monday - Friday: 9:00 AM - 6:00 PM
              </p>

              <p className="text-slate-300">
                Saturday: 10:00 AM - 4:00 PM
              </p>

              <p className="text-slate-300">
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;