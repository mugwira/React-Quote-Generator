import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="my-nav text-blue-800 bg-gray-300 ">
      <div className="my-links md:flex items-center justify-between py-4 px-32">
        <div className="right text-2xl font-semi-bold italic">
          <h3>Claire</h3>
        </div>
        <div className="flex flex-col md:flex-row items-center text-lg space-x-16">
          <Link to="/about" className="hover:text-blue-600">
            About 
          </Link>
          <Link to="/Todo" className="hover:text-blue-600">
            Todo
          </Link>
          <Link to="/Quotes" className="hover:text-blue-600">
            Quotes
          </Link>
          <Link to="/" className="hover:text-blue-600">
            Products
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
