import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { ShoppingCart, ArrowLeft, Loader2, Package, Tag, ShieldCheck, Trash2 } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [qty, setQty] = useState(1);
  
  const { user } = useAuth();
  const { cartItems, addToCart, removeFromCart } = useCart();
  
  const isInCart = cartItems.some((item) => item.product === id);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError('Product not found');
        setLoading(false);
      }
    };
    if (user) {
      fetchProduct();
    }
  }, [id, user, navigate]);

  if (loading) return (
    <div className="flex justify-center items-center h-[60vh]">
      <Loader2 className="animate-spin text-gray-400" size={48} />
    </div>
  );

  if (error) return (
    <div className="text-center py-20">
      <h2 className="text-2xl text-red-600 font-medium mb-4">{error}</h2>
      <Link to="/" className="text-gray-600 hover:text-gray-900 flex items-center justify-center gap-2">
        <ArrowLeft size={16} /> Back to Products
      </Link>
    </div>
  );

  const imageUrl = product.image?.startsWith('http') || product.image?.startsWith('https')
    ? product.image
    : `http://localhost:5000/${product.image}`;

  return (
    <div className="py-8 max-w-6xl mx-auto">
      <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-900 transition-colors mb-8 group font-medium">
        <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" /> 
        Back to Catalog
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        {/* Product Image */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm relative overflow-hidden aspect-square flex items-center justify-center">
          <img 
            src={imageUrl} 
            alt={product.title} 
            className="w-full h-full object-contain rounded-xl"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gray-100 text-gray-600 text-xs font-bold uppercase tracking-wider border border-gray-200 w-max">
            <Tag size={14} /> {product.category || 'General'}
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">{product.title}</h1>
          
          <div className="text-3xl font-bold text-gray-900 mb-6">
            ${product.price.toFixed(2)}
          </div>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            {product.description}
          </p>

          <div className="grid grid-cols-2 gap-6 mb-8 py-6 border-y border-gray-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                <Package size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Status</p>
                <p className="font-semibold text-gray-900">{product.stock > 0 ? 'In Stock' : 'Out of Stock'}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Guarantee</p>
                <p className="font-semibold text-gray-900">1 Year Warranty</p>
              </div>
            </div>
          </div>

          {product.stock > 0 && (
            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              {!isInCart && (
                <div className="flex items-center bg-white border border-gray-300 rounded-lg overflow-hidden h-14 w-full sm:w-auto">
                  <button 
                    className="px-4 text-gray-500 hover:text-gray-900 hover:bg-gray-50 h-full transition-colors font-medium text-xl"
                    onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                  >-</button>
                  <span className="px-6 font-semibold text-lg border-x border-gray-200 h-full flex items-center">{qty}</span>
                  <button 
                    className="px-4 text-gray-500 hover:text-gray-900 hover:bg-gray-50 h-full transition-colors font-medium text-xl"
                    onClick={() => setQty(qty < product.stock ? qty + 1 : qty)}
                  >+</button>
                </div>
              )}
              
              {isInCart ? (
                 <button 
                  onClick={() => removeFromCart(product._id)}
                  className="flex-1 bg-white border-2 border-red-100 hover:border-red-200 hover:bg-red-50 text-red-600 h-14 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all"
                >
                  <Trash2 size={22} /> Remove from Cart
                </button>
              ) : (
                <button 
                  onClick={() => addToCart(product, qty)}
                  className="flex-1 bg-gray-900 hover:bg-black text-white h-14 rounded-lg font-bold text-lg flex items-center justify-center gap-2 shadow-sm transition-all transform active:scale-95"
                >
                  <ShoppingCart size={22} /> Add to Cart
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
