import { Link } from 'react-router-dom';
import { ShoppingCart, Check, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { cartItems, addToCart, removeFromCart } = useCart();

  // Check if product is in cart
  const isInCart = cartItems.some((item) => item.product === product._id);

  // Handle both external urls and local uploads correctly
  const imageUrl = product.image?.startsWith('http') || product.image?.startsWith('https')
    ? product.image
    : `http://localhost:5000/${product.image}`;

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all group duration-300 flex flex-col">
      <Link to={`/product/${product._id}`} className="block relative overflow-hidden aspect-square bg-gray-50">
        <img 
          src={imageUrl} 
          alt={product.title} 
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
      </Link>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2 gap-2">
          <Link to={`/product/${product._id}`}>
            <h3 className="font-medium text-lg text-gray-900 hover:text-black transition-colors line-clamp-1">{product.title}</h3>
          </Link>
          <span className="font-semibold text-gray-900">${product.price.toFixed(2)}</span>
        </div>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-grow">{product.description}</p>
        
        {isInCart ? (
          <button 
            onClick={() => removeFromCart(product._id)}
            className="w-full py-2.5 px-4 bg-white border-2 border-red-100 hover:border-red-200 hover:bg-red-50 text-red-600 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
          >
            <Trash2 size={18} />
            Remove from Cart
          </button>
        ) : (
          <button 
            onClick={() => addToCart(product, 1)}
            className="w-full py-2.5 px-4 bg-gray-900 hover:bg-black text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingCart size={18} />
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
