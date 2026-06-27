import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

const Cart = () => {
  const { cartItems, addToCart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const checkoutHandler = () => {
    navigate('/login?redirect=/checkout');
  };

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
          <ShoppingBag size={48} className="text-gray-400" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
        <p className="text-gray-500 mb-8 max-w-md">Looks like you haven't added anything to your cart yet. Discover our premium collection.</p>
        <Link to="/" className="px-8 py-3.5 bg-gray-900 hover:bg-black text-white rounded-lg font-semibold transition-colors shadow-sm">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="py-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => {
            const imageUrl = item.image?.startsWith('http') || item.image?.startsWith('https')
              ? item.image
              : `http://localhost:5000/${item.image}`;
              
            return (
              <div key={item.product} className="flex flex-col sm:flex-row items-center gap-6 bg-white border border-gray-200 p-4 rounded-xl shadow-sm">
                <Link to={`/product/${item.product}`} className="w-full sm:w-32 h-32 shrink-0 bg-gray-50 rounded-lg overflow-hidden">
                  <img src={imageUrl} alt={item.name} className="w-full h-full object-contain" />
                </Link>
                
                <div className="flex-1 flex flex-col sm:flex-row justify-between w-full">
                  <div className="mb-4 sm:mb-0">
                    <Link to={`/product/${item.product}`} className="text-lg font-bold text-gray-900 hover:text-gray-600 transition-colors line-clamp-1">{item.name}</Link>
                    <p className="text-gray-900 font-semibold mt-1">${item.price.toFixed(2)}</p>
                  </div>
                  
                  <div className="flex items-center gap-4 self-start sm:self-center">
                    <div className="flex items-center bg-white border border-gray-300 rounded-md h-10 overflow-hidden">
                      <button 
                        className="px-3 text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors h-full"
                        onClick={() => addToCart({ _id: item.product, ...item }, item.qty > 1 ? -1 : 0)}
                        disabled={item.qty <= 1}
                      >-</button>
                      <span className="px-3 font-medium text-gray-900 border-x border-gray-200 h-full flex items-center min-w-[2.5rem] justify-center">{item.qty}</span>
                      <button 
                        className="px-3 text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors h-full"
                        onClick={() => addToCart({ _id: item.product, ...item }, 1)}
                      >+</button>
                    </div>
                    
                    <button 
                      onClick={() => removeFromCart(item.product)}
                      className="p-2.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
                      title="Remove Item"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-200 rounded-xl p-6 sticky top-24 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)} items)</span>
                <span className="text-gray-900 font-medium">${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className="text-gray-900 font-medium">Free</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax</span>
                <span className="text-gray-900 font-medium">$0.00</span>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-4 mb-8">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-gray-900">Total</span>
                <span className="text-2xl font-bold text-gray-900">
                  ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
                </span>
              </div>
            </div>
            
            <button 
              onClick={checkoutHandler}
              className="w-full py-3.5 bg-gray-900 hover:bg-black text-white rounded-lg font-bold text-lg flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              Proceed to Checkout <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
