import { Link } from 'react-router-dom';
import { ShoppingCart, User, PlusCircle, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { cartItems } = useCart();
  
  const cartCount = cartItems.reduce((acc, item) => acc + item.qty, 0);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-gray-900 tracking-tight">
          Lumina
        </Link>
        <div className="flex items-center space-x-6 text-sm font-medium">
          <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors">About</Link>
          
          {user && (
            <Link to="/upload" className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1">
              <PlusCircle size={18} />
              <span>Sell</span>
            </Link>
          )}

          <Link to="/cart" className="text-gray-600 hover:text-gray-900 transition-colors relative">
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          
          {user ? (
            <div className="flex items-center space-x-4">
              <span className="text-gray-600 hidden sm:inline-block">Hi, {user.name}</span>
              <button onClick={logout} className="text-gray-600 hover:text-red-600 transition-colors">
                <LogOut size={20} />
              </button>
            </div>
          ) : (
            <Link to="/login" className="text-gray-600 hover:text-gray-900 transition-colors">
              <User size={20} />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
