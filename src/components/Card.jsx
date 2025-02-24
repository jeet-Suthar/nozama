import { useState } from "react";
import { Minus, Plus, Info } from "lucide-react";
import React from "react";


// we have passed too many argument to this compoenent...bcoz this is required to show the product details
// and also to update the cart

const Card = ({ images, title, price, category, product, onClick, updateCart }) => {
  const [quantity, setQuantity] = useState(0);

  // Function to update quantity in cart
  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
    updateCart(product, newQuantity);
  };

  return (
    <div className="bg-[#161616] text-white border border-gray-700 rounded-lg shadow-lg">
      <div className="hover:opacity-75 transition-all relative">
        <div className="bg-gray-900/60 text-white text-sm font-semibold px-3 py-1 absolute top-2 left-2 rounded">
          $ {price}
        </div>
        <img src={images[0]} alt={title} className="w-full object-cover" />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-400">{category}</p>
      </div>

      <div className="mx-auto p-2 flex justify-between items-center">
        {/* Info Button */}
        <button
          type="button"
          className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all"
          onClick={onClick}
        >
          <Info size={18} />
        </button>
        {quantity === 0 ? (
          <button
            className="px-5 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all font-medium"
            onClick={(event) => {
              event.stopPropagation();
              handleQuantityChange(1);
            }}
          >
            Add
          </button>
        ) : (
          <div className="flex items-center gap-3 bg-gray-900/60 px-4 py-2 rounded-lg shadow-md">
            <button
              className="p-2 rounded-full hover:bg-gray-700 transition-all"
              onClick={(event) => {
                event.stopPropagation();
                handleQuantityChange(quantity > 1 ? quantity - 1 : 0);
              }}
            >
              <Minus size={16} />
            </button>

            <span className="text-base font-medium">{quantity}</span>

            <button
              className="p-2 rounded-full hover:bg-gray-700 transition-all"
              onClick={(event) => {
                event.stopPropagation();
                handleQuantityChange(quantity + 1);
              }}
            >
              <Plus size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
