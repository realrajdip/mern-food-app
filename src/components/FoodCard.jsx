import React from "react";
import { IoIosStar } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const FoodCard = ({ id, name, price, desc, img, rating, handleToast }) => {
  const dispatch = useDispatch();

  return (
    <div className="font-bold w-[250px] p-5 bg-white flex flex-col rounded-lg gap-2 border">
      <img
        src={img}
        alt=""
        className="w-auto h-[140px] hover:scale-110 cursor-grab trasition-all duration-500 ease-in-out rounded-lg border-2"
      />
      <div className="text-sm flex justify-between mt-2">
        <h2>{name}</h2>
        <span className="text-green-500 ">₹{price}</span>
      </div>
      <p className="text-sm font-normal">{desc.slice(0, 50)}...</p>
      <div className="flex justify-between ">
        <span className="flex justify-between items-center">
          <IoIosStar className="mr-1 text-yellow-400" /> {rating}
        </span>
        <button
          onClick={() => {
            dispatch(
              addToCart({
                id,
                name,
                price,
                rating,
                img,
                qty: 1,
              })
            );
            handleToast(name);
          }}
          className="px-3 py-2 text-white bg-green-500 hover:bg-green-600 rounded-md text-sm"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
