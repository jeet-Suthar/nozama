import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import motion and AnimatePresence...youtube se sikha ye

function ProductDetail({ product, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

  // Variants for swipe animation
  const swipeVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  // Go to next image
  const nextImage = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Go to previous image
  const prevImage = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="fixed z-40 inset-0 flex backdrop-blur-lg border-b border-white/10 shadow-lg items-center justify-center bg-[rgba(10,10,10,0.8)] bg-opacity-50">
      <div className="bg-[rgba(10,10,10,0.7)] p-6 rounded-lg shadow-lg max-w-md w-full relative">
        {/* Close Button */}
        <button className="text-red-500 pl-10 text-xl float-right" onClick={onClose}>
          ✖
        </button>

        <h2 className="text-xl font-bold text-white">{product.title}</h2>

        {/* Carousel Wrapper */}
        <div className="relative my-4 overflow-hidden">
          {/* Left Arrow */}
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
          >
            ◀
          </button>

          {/* Animated Image Display */}
          <div className="w-full h-60 flex items-center justify-center">
            <AnimatePresence custom={direction} mode="wait">
              <motion.img
                key={currentIndex} // Re-render on index change
                src={product.images[currentIndex]}
                alt={product.title}
                className="w-full h-full object-cover rounded-lg shadow-lg"
                variants={swipeVariants}
                initial="enter"
                animate="center"
                exit="exit"
                custom={direction}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
          >
            ▶
          </button>
        </div>

        {/* Image Indicators (Dots) */}
        <div className="flex justify-center space-x-2 mt-2">
          {product.images.map((_, index) => (
            <div
              key={index}
              className={`h-2 pb-3 w-2 mb-5 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-gray-500"
              }`}
            />
          ))}
        </div>

        {/* Product Description & Price */}
        <p className="text-gray-300">{product.description}</p>
        <p className="text-xl text-center font-semibold mt-2">Price: ${product.price}</p>
      </div>
    </div>
  );
}

export default ProductDetail;
