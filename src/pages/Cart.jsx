import React from "react";
import { Minus, Plus, Trash2, ShoppingCart } from "lucide-react";

const Cart = ({ cart, updateCart }) => {
  const cartItems = Object.values(cart);

  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = totalPrice * 0.2; // 20% discount de diya...apne baap ka kya ja raha hai
  const finalPrice = totalPrice - discount;

  return (
    <div className="container mx-auto p-6 mt-20 text-center pb-150">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center">
          <ShoppingCart size={48} className="text-gray-500 mb-4" />
          <p className="text-lg text-gray-400">Your cart is currently empty.</p>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto text-white bg-gray-900 p-6 rounded-lg shadow-lg">
          <div className="space-y-4">
            {/* mapping items which are selected by user */}
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b border-gray-700 pb-4"
              >
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded-lg"
                />

                <div className="flex-1 ml-4 text-left">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-400">${item.price.toFixed(2)}</p>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-all"
                    onClick={() => updateCart(item, item.quantity > 1 ? item.quantity - 1 : 0)}
                  >
                    <Minus size={16} />
                  </button>

                  <span className="w-6 text-center">{item.quantity}</span>

                  <button
                    className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-all"
                    onClick={() => updateCart(item, item.quantity + 1)}
                  >
                    <Plus size={16} />
                  </button>
                </div>

              
                <Trash2 
                className="ml-5 cursor-pointer text-red-700 hover:text-red-400 transition-all"
                onClick={() => updateCart(item, 0)} size={22} />

              </div>
            ))}
          </div>

          {/* Total, Discount, and Checkout */}
          <div className="mt-6 text-gray-200">
            <div className="flex justify-between text-lg font-semibold">
              <span>Subtotal:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>Discount (10%):</span>
              <span>-${discount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xl font-bold mt-2">
              <span>Total:</span>
              <span>${finalPrice.toFixed(2)}</span>
            </div>
          </div>

          <button className="w-full text-white mt-6 py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-500 rounded-lg transition-all">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
