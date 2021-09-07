import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="my-nav text-blue-800 bg-gray-300 py-5 px-5 md:px-24 ">
      <div className="my-links md:flex items-center justify-between">
        <div className="right text-2xl font-bold italic">
          <h3>Claire</h3>
        </div>
        <div className=" flex flex-col py-2 md:flex-row md:space-x-8 md:text-xl">
          <Link to="/about" className="transition duration-200 hover:text-blue-600 py-2">
            About 
          </Link>
          <Link to="/Todo" className="hover:text-blue-600 py-2">
            Todo
          </Link>
          <Link to="/Quotes" className="hover:text-blue-600 py-2">
            Quotes
          </Link>
          <Link to="/" className="hover:text-blue-600 py-2">
            Products
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
