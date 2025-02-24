// sabse complex file hai ye, ismei bohot saare components use hue hai...pura dimag yehi kha gya

// importing necessary modules
import React from "react";
import { useState, useEffect } from "react";
import {
  getProducts,
  getProductsByCategory,
  getSearchedItems,
} from "../services/api";
import Card from "../components/Card";
import ProductDetail from "../components/ProductDetail";
import SideBar from "../components/SideBar";

function Products({ updateCart, searchQuery }) {
  // states for sidebar, products, category, selected product and selected sort
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [categoryId, setCategoryId] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSort, setSelectedSort] = useState(null);

  // loading error and loading states...vo simple formatlly mei likha hai
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // function to sort products
  const sortProducts = (products, order) => {
    return [...products].sort((a, b) =>
      order === "lowToHigh" ? a.price - b.price : b.price - a.price
    );
  };

  // function to handle sort
  const handleSort = (order) => {
    setSelectedSort(order);
    setProducts(sortProducts(products, order));
  };

  // console.log("bidduu ye search kiya hai user ne; ", searchQuery);

  // ye default function hai which runs when component is mounted
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true); // Show loader
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        setError("Failed to fetch products");
        console.error(error);
      } finally {
        setLoading(false); // Hide loader
      }
    };
    fetchProducts();
  }, []);

  // handling search query related to products
  useEffect(() => {
    if (!searchQuery) return; // agar search query nahi hai toh return kar do

    const fetchSearchedItems = async () => {
      setLoading(true);
      try {
        const data = await getSearchedItems(searchQuery);
        setProducts(data);
      } catch (error) {
        setError("Failed to fetch products");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchedItems();
  }, [searchQuery]); // Add searchQuery to dependencies

  // useEffect for handling products by category
  useEffect(() => {
    const fetchProductsByCategory = async (categoryId) => {
      if (categoryId !== null) {
        setLoading(true);
        try {
          const data = await getProductsByCategory(categoryId);
          setProducts(data);
        } catch (error) {
          setError("Failed to fetch products");
          console.error(error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchProductsByCategory(categoryId);
  }, [categoryId]);

  return (


    <div className="flex relative">
      {/* Sidebar */}
      <SideBar
        categoryId={categoryId}
        setCategoryId={setCategoryId}
        handleSort={handleSort}
        selectedSort={selectedSort}
      />

      {/* Main Content */}
      <div
        className={`p-4 transition-all w-full md:ml-0 ${
          isSidebarOpen ? "md:mr-64" : "md:mr-0"
        }`}
      >
        <h1 className="mt-20 text-xl font-bold">Products</h1>
        <br />

        {/* yaha dhyan dena if-else ladder type condition handling ki hai */}
        
        {/* Loading Spinner */}
        {loading ? (
          <div className="flex justify-center items-center h-60">
            <div className="w-12 h-12 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
          </div>
        ) : products.length === 0 ? (
          <div className="flex justify-center items-center h-60">
            <p className="text-lg text-center text-gray-500">
              No results found
              <br />
              Working on expanding our stocks
              <br />
              Jald hi...
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:pr-15">
            {products.map((product) => (
              <div key={product.id} className="rounded overflow-hidden">
                <Card
                  title={product.title}
                  images={product.images}
                  price={product.price}
                  category={product.category.name}
                  updateCart={updateCart}
                  product={product}
                  onClick={() => setSelectedProduct(product)}
                />
              </div>
            ))}
          </div>
        )}

        {/* Show Detail Page when a product is selected */}
        {selectedProduct && (
          <ProductDetail
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </div>
    </div>
  );
}

export default Products;
