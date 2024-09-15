import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../Redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

function CartItem({ item, itemIndex }) {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div>
      <div className=" flex justify-center items-center gap-20 py-10 border-b-2 border-slate-900 min-[320px]:flex-wrap max-[600px]:flex-wrap  lg:flex-nowrap  min-[320px]:px-10 max-[600px]:px-10 min-[320px]:mx-5 max-[600px]:mx-5">
        <div className=" lg:w-52 min-[640px]:w-52 max-[740px]:w-52">
          <img src={item.image} />
        </div>
        <div className=" flex flex-col gap-5">
          <h1 className="text-slate-900 font-bold text-lg">{item.title}</h1>
          <h1 className="text-gray-700 font-semibold text-sm">
            {item.description.split(" ").slice(0, 10).join(" ") + "..."}
          </h1>
          <div className=" flex flex-row items-center">
            <p className="text-green-700 font-bold text-2xl">$ {item.price}</p>
            <div
              className="relative left-48  text-2xl text-slate-900 cursor-pointer w-10 h-10 flex justify-center items-center rounded-full bg-gray-500"
              onClick={removeFromCart}
            >
              <MdDelete />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
