import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/slice";
import { useEffect } from "react";
import { fetchdata } from "../api";
import { removesingleitem } from "../store/slice";
const Cards = () => {
  const dispatch = useDispatch();

  const cartitems = useSelector((state) => {
    return state.store.itemadded || [];
  });

  const s = useSelector((state) => {
    return state.api.items?.products || [];
  });
  useEffect(() => {
    dispatch(fetchdata());
  }, [dispatch]);

  return (
    <div className="flex flex-wrap gap-5 justify-center">
      {s.map((items, idx) => (
        <div
          key={idx}
          className="flex flex-col hover:-translate-y-2 shadow-2xl m-5 gap-5 w-72 rounded-2xl p-5"
        >
          <div className="flex justify-center">
            <img
              className="h-40 w-40 object-cover"
              src={items.images[0]}
              alt={items.title}
            />
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold">{items.description.slice(0, 60)}...</p>
            <h1 className="font-black text-gray-600">{items.brand}</h1>
            <h1 className="text-green-600 font-bold">{items.price}</h1>
            <p className="text-sm text-gray-500">{items.rating}</p>

            <div className="h-10 w-50 ml-6 flex justify-center items-center">
              {cartitems.find((exsistitem) => exsistitem.id == items.id) ? (
                <button
                  onClick={() => {
                    dispatch(removesingleitem(items.id));
                  }}
                  className="bg-red-600 hover:bg-red-500 text-white p-2 w-50 h-10 rounded-2xl"
                >
                  Remove from Cart
                </button>
              ) : (
                <button
                  onClick={() => {
                    dispatch(add(items));
                  }}
                  className="bg-blue-600 active:scale-95 text-white hover:bg-blue-500 p-2 w-50 h-10 rounded-2xl"
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
