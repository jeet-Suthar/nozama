import { Facebook, Twitter, Instagram, Mail } from "lucide-react";
import React from "react";
function Footer() {
  return (
    <footer className="bg-[rgba(20,14,37,0.8)] text-gray-300 py-10 border-t border-gray-700">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* About Section */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">About Us</h4>
          <p className="text-sm text-gray-400">
            Discover a seamless shopping experience with Nozama. We bring you quality products at the best prices.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-white transition">Company Information</a></li>
            <li><a href="/" className="hover:text-white transition">Careers</a></li>
            <li><a href="/about" className="hover:text-white transition">Contact Us</a></li>
            <li><a href="/" className="hover:text-white transition">FAQ</a></li>
          </ul>
        </div>

        {/* Social Media & Newsletter */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Stay Connected</h4>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook size={24} className="hover:text-blue-500 transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter size={24} className="hover:text-blue-400 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram size={24} className="hover:text-pink-500 transition" />
            </a>
          </div>

         
          
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-4">
        <p>© 2025 Nozama. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
