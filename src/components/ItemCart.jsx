import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/CartSlice";
const ItemCart = ({ id, name, price, img, qty }) => {
  const dispatch = useDispatch();
  return (
    <div onClick={() => dispatch(removeFromCart({id, name, price, img, qty }))} className="flex gap-2 shadow-md rounded-lg p-2 mb-3 border">
      <MdDelete className="absolute right-7 text-gray-600 cursor-pointer hover:text-red-600" />
      <img src={img} alt="" className="w-[50px] h-[50px]" />
      <div className="leading-5">
        <h2 className="font-bold text-gray-800">{name}</h2>
        <div className="flex justify-between">
          <span className="text-green font-bold text-green-500">₹{price}</span>
          <div className="flex justify-center  items-center gap-2 absolute right-7">
            <AiOutlinePlus className="border-2 border-gray-600 text-gray-600 hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear hover:text-white cursor-pointer" />
            <span>{qty}</span>
            <AiOutlineMinus className="border-2 border-gray-600 text-gray-600 hover:bg-green-500 hover:text-white hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
