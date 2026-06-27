import { useState, useEffect } from 'react';
import axios from 'axios';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/products');
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };
    
    if (user) {
      fetchProducts();
    }
  }, [user, navigate]);

  return (
    <div className="flex flex-col space-y-16 pb-16">
      {/* Hero Section */}
      <section className="bg-white rounded-2xl overflow-hidden border border-gray-200 p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-sm">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm font-medium border border-gray-200">
            <ShoppingBag size={16} />
            <span>New Arrivals 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
            Discover Premium <br className="hidden md:block"/> Quality Products
          </h1>
          <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
            Curated collections for your everyday needs. Experience simple, decent, and professional shopping.
          </p>
          <div className="pt-4">
            <a href="#products" className="inline-flex items-center gap-2 px-8 py-3.5 bg-gray-900 hover:bg-black text-white rounded-lg font-medium transition-all shadow-sm">
              Shop Collection <ArrowRight size={18} />
            </a>
          </div>
        </div>
        <div className="flex-1 w-full max-w-lg hidden md:block">
          <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Hero Banner" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="space-y-8 pt-4">
        <div className="flex items-center justify-between border-b border-gray-200 pb-4">
          <h2 className="text-2xl font-bold text-gray-900">Featured Collection</h2>
        </div>
        
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="animate-pulse bg-gray-200 rounded-xl h-[360px]"></div>
            ))}
          </div>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map(product => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-200 shadow-sm">
            <h3 className="text-xl font-medium text-gray-900">No products available</h3>
            <p className="text-gray-500 mt-2">Check back later or list your own.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
