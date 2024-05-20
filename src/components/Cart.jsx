import React from "react";
import { IoClose } from "react-icons/io5";
import ItemCart from "./ItemCart";
import { useSelector } from "react-redux";

const Cart = () => {
  // const cartItems = useSelector((state) => state.cart.)
  return (
    <>
      <div className="fixed right-0 top-0 w-full lg:w-[22vw] p-5 h-full bg-white mb-3">
        <div className="flex justify-between items-center my-3">
          <span className="text-xl font-bold text-gray-800">My Order</span>
          <IoClose className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer" />
        </div>

        <ItemCart/>
        <ItemCart/>
        <ItemCart/>

        <div className="absolute bottom-0">
          <h3 className="font-semibold text-gray-800">Items : </h3>
          <h3 className="font-semibold text-gray-800">Total Amount: </h3>
          <hr className="w-[90vw] lg:w-[20vw] my-2" />
          <button className="bg-green-500 font-bold px-3 text-white py-2 rounded-md w-[90vw] lg:w-[20vw] mb-5 hover:bg-green-600">Checkout</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
