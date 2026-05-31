const About = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">About Our Store</h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            We are dedicated to providing high-quality products, exceptional
            customer service, and a seamless online shopping experience for
            customers around the world.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1556740749-887f6717d7e4"
              alt="Store"
              className="rounded-3xl shadow-xl"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Our Story
            </h2>

            <p className="text-slate-600 leading-relaxed mb-4">
              Founded with a passion for quality and innovation, our mission is
              to connect customers with products they love. We believe shopping
              should be simple, enjoyable, and accessible to everyone.
            </p>

            <p className="text-slate-600 leading-relaxed">
              From carefully selected products to reliable customer support, we
              strive to create an experience that exceeds expectations every
              time you visit our store.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-4xl font-bold mb-12">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl shadow-md">
              <h3 className="text-2xl font-semibold mb-4">
                Premium Products
              </h3>
              <p className="text-slate-600">
                Carefully selected products that meet the highest standards of
                quality and reliability.
              </p>
            </div>

            <div className="p-8 rounded-3xl shadow-md">
              <h3 className="text-2xl font-semibold mb-4">
                Fast Delivery
              </h3>
              <p className="text-slate-600">
                Reliable shipping services ensuring your orders arrive safely
                and on time.
              </p>
            </div>

            <div className="p-8 rounded-3xl shadow-md">
              <h3 className="text-2xl font-semibold mb-4">
                Customer Support
              </h3>
              <p className="text-slate-600">
                Friendly support team available to help with any questions or
                concerns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>

          <p className="text-slate-600 text-lg leading-relaxed">
            To make online shopping effortless by providing exceptional value,
            trusted products, and outstanding customer experiences while
            building long-term relationships with our customers.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;