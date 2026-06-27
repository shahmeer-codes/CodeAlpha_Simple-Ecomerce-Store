import { Star, ShieldCheck, Truck, HeartHandshake } from 'lucide-react';

const About = () => {
  return (
    <div className="py-12 max-w-5xl mx-auto">
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">About Lumina</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We believe that shopping should be an experience. Curated collections, modern aesthetics, and unparalleled quality.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Founded with a passion for design and utility, Lumina was created to bridge the gap between aesthetics and functionality. We provide a marketplace where every product listed meets our high standards for simple, decent, and professional design.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            Today, we empower creators and brands to showcase their finest products to a global audience. Whether you're here to discover something new or share your creations with the world, Lumina is your platform.
          </p>
        </div>
        <div className="relative h-96 rounded-2xl overflow-hidden bg-gray-100 shadow-sm border border-gray-200">
          <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Our Workspace" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white border border-gray-200 p-8 rounded-2xl text-center space-y-4 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-14 h-14 mx-auto bg-gray-100 text-gray-800 rounded-xl flex items-center justify-center">
            <Star size={28} />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Premium Quality</h3>
          <p className="text-gray-500 text-sm">Every item is verified to ensure the highest quality standards.</p>
        </div>
        <div className="bg-white border border-gray-200 p-8 rounded-2xl text-center space-y-4 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-14 h-14 mx-auto bg-gray-100 text-gray-800 rounded-xl flex items-center justify-center">
            <ShieldCheck size={28} />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Secure Shopping</h3>
          <p className="text-gray-500 text-sm">Your data and transactions are protected by industry-leading security.</p>
        </div>
        <div className="bg-white border border-gray-200 p-8 rounded-2xl text-center space-y-4 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-14 h-14 mx-auto bg-gray-100 text-gray-800 rounded-xl flex items-center justify-center">
            <Truck size={28} />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Fast Delivery</h3>
          <p className="text-gray-500 text-sm">Reliable shipping to get your products to you quickly and safely.</p>
        </div>
        <div className="bg-white border border-gray-200 p-8 rounded-2xl text-center space-y-4 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-14 h-14 mx-auto bg-gray-100 text-gray-800 rounded-xl flex items-center justify-center">
            <HeartHandshake size={28} />
          </div>
          <h3 className="text-xl font-bold text-gray-900">24/7 Support</h3>
          <p className="text-gray-500 text-sm">Our dedicated team is always here to help you with any questions.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
