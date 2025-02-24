import { Filter, RefreshCcw } from "lucide-react";
import { useState } from "react";
import React from "react";

function Sidebar({
  categoryId,
  setCategoryId,
  handleSort,
  selectedSort,
}) {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // I have considered these categories for now...bcoz I don't know there are some users who are using this API and adding any random category...
  // jis se mera project kharab ho jayega...so I have considered only these categories 
  const categories = [
    { id: 1, name: "Clothes" },
    { id: 3, name: "Furniture" },
    { id: 4, name: "Shoes" },
    { id: 2, name: "Electronics" },
    { id: 5, name: "Miscellaneous" },
  ];

  return (
    <>
      {/* Sidebar Toggle Button (Mobile) */}
      {!isSidebarOpen && (
        <button
          className="fixed right-4 top-24 z-30 md:hidden bg-gray-900 text-white p-2 rounded shadow-lg"
          onClick={() => setIsSidebarOpen(true)}
        >
          <Filter />
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`fixed z-40 right-0 top-0 mt-20 h-180 bg-[#121212] text-white p-6 transition-all
          w-64 md:relative md:block shadow-lg rounded-lg border border-gray-800
          ${
            isSidebarOpen
              ? "translate-x-0"
              : "translate-x-full md:translate-x-0"
          }`}
      >
        {/* Modern Sidebar Toggle Button (Only when open) */}
        {isSidebarOpen && (
          <button
            className="absolute -left-6 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md 
            transition-transform duration-300 hover:scale-110"
            onClick={() => setIsSidebarOpen(false)}
          >
            ➜
          </button>
        )}

        {/* Categories */}
        <h2 className="text-lg font-semibold mb-4">Categories</h2>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li
              key={category.id}
              className={`p-3 rounded-lg cursor-pointer transition-colors duration-200 text-gray-300
                ${
                  categoryId === category.id
                    ? "bg-gray-700 text-white font-semibold"
                    : "hover:bg-gray-800"
                }`}
              onClick={() => setCategoryId(category.id)}
            >
              {category.name}
            </li>
          ))}
        </ul>

        {/* Sorting Options */}
        <h2 className="text-lg font-semibold mt-6 mb-2">Sort By</h2>
        <ul className="space-y-2">
          <li
            className={`p-3 rounded-lg cursor-pointer transition-colors duration-200 text-gray-300
              ${
                selectedSort === "lowToHigh"
                  ? "bg-gray-700 text-white font-semibold"
                  : "hover:bg-gray-800"
              }`}
            onClick={() => handleSort("lowToHigh")}
          >
            Price: Low to High
          </li>
          <li
            className={`p-3 rounded-lg cursor-pointer transition-colors duration-200 text-gray-300
              ${
                selectedSort === "highToLow"
                  ? "bg-gray-700 text-white font-semibold"
                  : "hover:bg-gray-800"
              }`}
            onClick={() => handleSort("highToLow")}
          >
            Price: High to Low
          </li>
        </ul>

        {(categoryId !== null || selectedSort !== null) && (
          <button
            className="w-full mt-15  flex items-center  justify-center gap-2
                    text-red-400 font-semibold py-2 px-4 rounded-lg transition duration-200 shadow-md"
            onClick={() => window.location.reload()} // Reloads the page
          >
            <RefreshCcw size={18} />
            Reset Filters
          </button>
        )}
      </div>
    </>
  );
}

export default Sidebar;
