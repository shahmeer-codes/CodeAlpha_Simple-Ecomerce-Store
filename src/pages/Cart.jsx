import { useDispatch, useSelector } from "react-redux";
import Nav2 from "../components/Nav2";
import { removesingleitem, updateQuantity, placeorder } from "../store/slice";
import { Link, Links } from "react-router-dom";

const Cart = () => {
  const items = useSelector((state) => {
    return state.store.itemadded;
  });

  const dispatch = useDispatch();

  return (
    <div className="">
      <Nav2 />
      {items.length > 0 ? (
        <div className="flex justify-center items-center m-5">
          <div className=" h-fit w-360 p-5 rounded-2xl shadow-2xl bg-white">
            <div className="h-10 w-350 p-10 border-b-2 mb-2 border-white text-2xl font-bold flex justify-between">
              <p>Your Cart</p>
              <p>Total {items.length} items</p>
            </div>
            {items.map((itm, idx) => (
              <div
                key={idx}
                className="h-30 w-350 mb-5 p-5 bg-gray-300 rounded-4xl flex justify-between items-center text-black"
              >
                <div className="flex">
                  <img src={itm.images} className="h-30 w-30 bg-black0" />
                  <div className="flex flex-col justify-center font-bold">
                    <p>{itm.title}</p>
                    <p className="text-gray-600">{itm.brand}</p>
                  </div>
                </div>

                <div className="flex  justify-center ">
                  <div className="">
                    <input
                      min="1"
                      value={itm.quantity || 1}
                      onChange={(e) => {
                        dispatch(
                          updateQuantity({
                            id: itm.id,
                            quantity: e.target.value,
                          }),
                        );
                      }}
                      type="number"
                      placeholder="Enter quentity of item..."
                      className="border-2 flex justify-center items-center p-1 border-black"
                    />
                  </div>
                  <div className="flex flex-col  justify-center ">
                    <p className="flex justify-end m-2 text-green-600">
                      $
                      {(itm.quantity
                        ? itm.price * itm.quantity
                        : itm.price
                      ).toFixed(2)}
                    </p>

                    <button
                      onClick={() => {
                        dispatch(removesingleitem(itm.id));
                      }}
                      className="bg-blue-700 active:scale-95 text-white hover:bg-blue-600  w-40 h-10 rounded-2xl"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex justify-between items-center text-green-600 p-10 font-bold text-2xl">
              <Link to={"/"}>
                {" "}
                <button
                  onClick={() => {
                    dispatch(placeorder());
                  }}
                  className="bg-blue-700 active:scale-95 font-normal text-white hover:bg-blue-600  w-40 h-10 rounded-2xl"
                >
                  Place order
                </button>
              </Link>
              <div>
                Total :${" "}
                {items
                  .reduce((sum, item) => {
                    return sum + item.price * (item.quantity || 1);
                  }, 0)
                  .toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center p-10 text-gray-500">
          <p className="text-2xl mb-4">Your cart is empty</p>
          <p>Add some items to get started!</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
