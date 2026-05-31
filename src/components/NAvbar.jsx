import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cartValue = useSelector((state) => state.store.itemadded.length);

  return (
    <nav className="sticky top-0 z-50 w-full bg-blue-950/90 backdrop-blur-md text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">

        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide">
          <span className="text-blue-300">My</span>Shop
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-base font-medium">
          <Link
            to="/"
            className="hover:text-blue-300 transition duration-200"
          >
            Home
          </Link>

          <Link
            to="/About"
            className="hover:text-blue-300 transition duration-200"
          >
            About
          </Link>

          <Link
            to="/Contact"
            className="hover:text-blue-300 transition duration-200"
          >
            Contact
          </Link>
        </div>

        {/* Cart */}
        <div className="relative flex items-center">
          <Link
            to="/cart"
            className="relative p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <ShoppingCart size={24} />
          </Link>

          {cartValue > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-md animate-pulse">
              {cartValue}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;