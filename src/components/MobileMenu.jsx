import { Link } from "react-router-dom";
import React from "react";

//  ye mobile menu ka component hai jo ki navbar ke andar use hoga
//  ismei humne menuOpen and setMenuOpen props liye hai jo ki navbar se aayenge

function MobileMenu({ menuOpen, setMenuOpen }) {
  return (
    <>
      <div
        className={`fixed top-0 left-0  w-full bg-[rgba(10,10,10,0.8)] z-49 flex flex-col items-center justify-center
                            transition-all duration-300 ease-in-out
                            ${
                              menuOpen
                                ? "h-screen opacity-100 pointer-events-auto"
                                : "h-screen opacity-0 pointer-events-none"
                            }
                        `}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-white   text-4xl focus:outline-none cursor-pointer "
        >
          &times;
        </button>

        <Link
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-while my-4 transform transition-transform] duration-300
                    ${
                      menuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                    }`}
          to="/"
        >
          Home
        </Link>

        <Link
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-while my-4 transform transition-transform] duration-300
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          to="/about"
        >
          About
        </Link>

        <Link
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-while my-4 transform transition-transform] duration-300
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          to="/products"
        >
          Products
        </Link>

        <Link
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-while my-4 transform transition-transform] duration-300
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          to="/cart"
        >
          Cart
        </Link>
      </div>
    </>
  );
}
export default MobileMenu;
