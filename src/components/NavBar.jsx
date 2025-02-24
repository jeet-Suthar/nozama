import React from "react";
import { Link ,useNavigate} from "react-router-dom";
import { useEffect ,useState} from "react";

import { Search, ShoppingCart } from "lucide-react";

function NavBar({ menuOpen, setMenuOpen, setSearchQuery }) {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  // function to handle search query
  const handleSearch = (e) => {
    e.preventDefault(); // Prevent page reload
    setSearchQuery(input); // Update the state in App.js
    navigate(`/products`);
    setInput(""); // Clear the input field
    console.log("search query: ", input);
  };

  // funciton to handle menu open/close
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[rgba(22,21,46,0.7)] backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center h-16">
            <Link className="text-xl font-bold" to="/">
              Nozama
            </Link>
            {/* search box with icon */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="bg-gray-900 text-white px-4 py-2 w-30 sm:w-full rounded-lg focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 text-gray-300"
              >
                <Search size={20} />
              </button>
            </form>
            <div
              className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              &#9776;
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                className="text-gray-300 hover:text-white transition-colors"
                to="/"
              >
                Home
              </Link>
              
              <Link
                className="text-gray-300 hover:text-white transition-colors"
                to="/about"
              >
                About
              </Link>
              <Link
                className="text-gray-300 hover:text-white transition-colors"
                to="/products"
              >
                Products
              </Link>

              <Link
                className="text-gray-300 hover:text-white transition-colors"
                to="/cart"
              >
                <ShoppingCart size={24} />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
