import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import { CheckCircle, Loader2 } from 'lucide-react';

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [fullName, setFullName] = useState(user?.name || '');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate('/login?redirect=/checkout');
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  const itemsPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const shippingPrice = itemsPrice > 100 ? 0 : 10;
  const taxPrice = Number((0.15 * itemsPrice).toFixed(2));
  const totalPrice = itemsPrice + shippingPrice + taxPrice;

  const placeOrderHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
      };

      await axios.post(
        'http://localhost:5000/api/orders',
        {
          orderItems: cartItems.map(item => ({
            product: item.product,
            title: item.name,
            quantity: item.qty,
            price: item.price,
            image: item.image
          })),
          shippingAddress: { fullName, phoneNumber, address, city, postalCode, country },
          totalPrice,
        },
        config
      );

      setSuccess(true);
      clearCart();
      setLoading(false);
    } catch (err) {
      setError(err.response?.data?.message || 'Error placing order');
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="w-24 h-24 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6">
          <CheckCircle size={48} />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Order Confirmed</h2>
        <p className="text-gray-500 mb-8 max-w-md">Thank you for your purchase. We've received your order and will process it shortly.</p>
        <button onClick={() => navigate('/')} className="px-8 py-3.5 bg-gray-900 hover:bg-black text-white rounded-lg font-semibold transition-colors shadow-sm">
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>
      
      {error && <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-lg mb-6">{error}</div>}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white border border-gray-200 rounded-xl p-8 shadow-sm h-max">
          <h2 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">Shipping Information</h2>
          <form id="checkout-form" onSubmit={placeOrderHandler} className="space-y-5">
            <div className="grid grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-gray-700">Full Name</label>
                <input 
                  type="text" required value={fullName} onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-gray-700">Phone Number</label>
                <input 
                  type="text" required value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  placeholder="+1 234 567 8900"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-700">Address</label>
              <input 
                type="text" required value={address} onChange={(e) => setAddress(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                placeholder="123 Main St"
              />
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-gray-700">City</label>
                <input 
                  type="text" required value={city} onChange={(e) => setCity(e.target.value)}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-gray-700">Postal Code</label>
                <input 
                  type="text" required value={postalCode} onChange={(e) => setPostalCode(e.target.value)}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-700">Country</label>
              <input 
                type="text" required value={country} onChange={(e) => setCountry(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
              />
            </div>
          </form>
        </div>

        <div className="lg:col-span-1 bg-white border border-gray-200 rounded-xl p-6 shadow-sm h-max sticky top-24">
          <h2 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">Order Summary</h2>
          <div className="space-y-4 mb-6 max-h-60 overflow-y-auto pr-2">
            {cartItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-2 overflow-hidden">
                  <span className="text-gray-500 font-medium shrink-0">{item.qty}x</span>
                  <span className="text-gray-900 truncate">{item.name}</span>
                </div>
                <span className="text-gray-900 font-medium shrink-0">${(item.price * item.qty).toFixed(2)}</span>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-200 pt-4 space-y-3 mb-8">
            <div className="flex justify-between text-gray-600">
              <span>Items</span>
              <span className="text-gray-900 font-medium">${itemsPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span className="text-gray-900 font-medium">${shippingPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Tax</span>
              <span className="text-gray-900 font-medium">${taxPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center pt-3 mt-3 border-t border-gray-200">
              <span className="text-lg font-bold text-gray-900">Total</span>
              <span className="text-2xl font-bold text-gray-900">${totalPrice.toFixed(2)}</span>
            </div>
          </div>

          <button 
            type="submit" form="checkout-form" disabled={loading || cartItems.length === 0}
            className="w-full py-3.5 bg-gray-900 hover:bg-black text-white rounded-lg font-bold text-lg flex items-center justify-center gap-2 shadow-sm transition-all disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? <Loader2 className="animate-spin" size={24} /> : 'Place Order'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
