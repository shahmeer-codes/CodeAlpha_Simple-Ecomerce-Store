import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const NAvbar = () => {
  const cartValue = useSelector((state) => state.store.itemadded.length);

  return (
    <div className="flex bg-blue-950 text-white justify-between h-20 w-screen items-center text-2xl ">
      <div className="font-bold ml-10">
        <h1>MyShop</h1>
      </div>
      <div className="flex gap-10">
        <Link to="/">Home</Link>
        <Link to="/">Products</Link>
      </div>
      <div className="h-12 w-12 mr-10 flex justify-center items-center rounded-full bg-black relative">
        <Link to="/cart">
          <ShoppingCart size={28} />
        </Link>

        {cartValue > 0 && (
          <div className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2">
            {cartValue}
          </div>
        )}
      </div>
    </div>
  );
};

export default NAvbar;
