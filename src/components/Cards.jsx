import { useDispatch, useSelector } from "react-redux";
import { add, removesingleitem } from "../store/slice";
import { useEffect } from "react";
import { fetchdata } from "../api";

const Cards = () => {
  const dispatch = useDispatch();

  const cartitems = useSelector((state) => state.store.itemadded || []);
  const s = useSelector((state) => state.api.items?.products || []);

  useEffect(() => {
    dispatch(fetchdata());
  }, [dispatch]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {s.map((items, idx) => {
        const isInCart = cartitems.find((i) => i.id === items.id);

        return (
          <div
            key={idx}
            className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden hover:-translate-y-2 border border-gray-100 flex flex-col"
          >
            {/* Image */}
            <div className="h-48 w-full flex items-center justify-center bg-gray-50 overflow-hidden">
              <img
                src={items.images?.[0]}
                alt={items.title}
                className="h-full w-full object-contain group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col gap-2 flex-1">
              <h2 className="font-semibold text-gray-800 text-sm line-clamp-2">
                {items.description?.slice(0, 70)}...
              </h2>

              <p className="text-xs text-gray-500 font-medium">
                {items.brand}
              </p>

              <div className="flex items-center justify-between mt-2">
                <span className="text-green-600 font-bold text-lg">
                  ${items.price}
                </span>

                <span className="text-xs text-gray-400">
                  ⭐ {items.rating}
                </span>
              </div>

              {/* Button */}
              <div className="mt-auto pt-4">
                {isInCart ? (
                  <button
                    onClick={() => dispatch(removesingleitem(items.id))}
                    className="w-full py-2 rounded-xl bg-red-500 text-white font-medium hover:bg-red-600 active:scale-95 transition"
                  >
                    Remove from Cart
                  </button>
                ) : (
                  <button
                    onClick={() => dispatch(add(items))}
                    className="w-full py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 active:scale-95 transition"
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;