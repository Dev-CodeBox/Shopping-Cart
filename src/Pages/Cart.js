import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../Components/CartItem";

function Cart () {
  const { cart } = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div>
      {cart.length > 0 ? (
        <div
          className=" flex items-center lg:flex-nowrap lg:max-w-5xl lg:mx-40 lg:my-8  lg:gap-4 sm:mx-2 sm:my-2 sm:px-2 sm:gap-4 sm:flex-wrap md:mx-3 md:my-3 md:px-3 md:gap-5 md:flex-wrap min-[320px]:mx-1 max-[600px]:mx-1 min-[320px]:my-1 max-[600px]:my-1
        min-[320px]:gap-2 max-[600px]:gap-2 min-[320px]:flex-wrap max-[600px]:flex-wrap  overflow-hidden"
        >
          <div className="">
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div className=" flex flex-col gap-40 lg:sticky lg:top-2 min-[320px]:mx-5 max-[600px]:mx-5">
            <div>
              <div className="text-green-700 font-semibold text-lg">
                Your Cart
              </div>
              <div>
                <h1 className="text-green-700 font-semibold text-5xl">
                  Summary
                </h1>
              </div>
              <p>
                <span className="text-gray-700 font-semibold">
                  Total Items :
                  <span className=" text-slate-900 font-bold">
                    {" "}
                    {cart.length}
                  </span>
                </span>
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-gray-700 font-semibold">
                Total Amount :
                <span className=" text-slate-900 font-bold">
                  {" "}
                  $ {totalAmount}
                </span>
              </p>
              <button className="text-white text-lg bg-green-600 hover:bg-green-700 transition-all px-8 w-56 h-10 rounded-md font-semibold">
                CheckOut Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className=" flex flex-col items-center gap-2 relative top-40">
          <h1>Cart Empty</h1>
          <Link to={"/"}>
            <button
              className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
            >
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
