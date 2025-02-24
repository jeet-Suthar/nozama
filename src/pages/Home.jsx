import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart } from "lucide-react";
import React from "react";
import Card from "../components/Card";
import {
  getProducts,
} from "../services/api";

function Home({updateCart}) {

  const [FeaturedProducts, setFeaturedProducts] = useState([]);

  // laoding error and loading states
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // default function to fetch products...jab page load hoga tab ye chalega 
  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      setLoading(true); // Show loader
      try {
        const data = await getProducts();
        setFeaturedProducts(data);
      } catch (error) {
        setError("Failed to fetch products");
        console.error(error);
      } finally {
        setLoading(false); // Hide loader
      }
    };

    fetchFeaturedProducts();
  }
  , []);

  return (
    <>
      {/* Hero Section with Video Background */}
      <section className="relative w-full h-screen lg:h-[56.25vw] flex items-center justify-center text-white text-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source
              src="4008542-uhd_2160_4096_25fps.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Dark & Blurred Overlay */}
          <div className="absolute inset-0 bg-[rgba(22,21,46,0.8)] backdrop-blur-xs z-0"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 px-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-wide">
            Welcome to <span className="line-through font-medium text-gray-400"> Amazon</span>
            <span className="text-5xl sm:text-7xl lg:text-9xl  bg-gradient-to-r from-purple-400 to-purple-700 text-transparent bg-clip-text">
              {" "}
              <br />
              Nozama
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-neutral-300 max-w-3xl mx-auto">
            Discover an amazing collection of products at the best prices.
            Explore categories, find deals, and shop with ease.
          </p>
          <button
            className="mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold 
          transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 
          rounded-full shadow-lg  "
          >
            {/* yaha pe shop now pe click karna bcoz useEffect use nahi kiya  */}
            <Link to="/products">Shop Now</Link> 
            <ShoppingCart size={20} className="inline-block ml-2" />
          </button>
        </div>
      </section>

      {/* Sliding Window Section */}
      <section className="py-12 pt-20 pb-40 bg-[rgba(30,21,46,0.8)] ">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold  mb-8">
            Featured Products
          </h2>

          {/* Sliding Window ...so yaha pe mene 10 prodcut liye hai bas without any filter to keep thing simple
            Also Info button will not work here */}
          <div className="relative overflow-hidden">
            <div className="animate-slide flex space-x-4 ">
            {FeaturedProducts.slice(0,10).map((product) => (
              <div key={product.id} className="rounded overflow-hidden w-64">
                <Card
                  title={product.title}
                  images={product.images}
                  price={product.price}
                  category={product.category.name}
                  product={product}
                  updateCart={updateCart}
                  
                />
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Sliding Animation */}
      <style>{`
        @keyframes slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-slide {
          display: flex;
          width: max-content;
          animation: slide 20s linear infinite;
        }
      `}</style>
    </>
  );
}

export default Home;
