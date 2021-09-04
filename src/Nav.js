import React from "react";
import { link } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Nav() {
  return (
    <div className="my-nav text-gray-200 bg-gray-400 ">
      <div className="my-links flex items-center justify-between py-8 px-32">
        <div className="right text-2xl font-semi-bold italicnpm install">
          <h3>Claire</h3>
        </div>
        <div className="left space-x-16 text-lg">
          <Link to="/" className="hover:text-gray-300">
            Products
          </Link>
          <Link to="/Todo" className="hover:text-gray-300">
            Todo
          </Link>
          <Link to="/Quotes" className="hover:text-gray-300">
            Quotes
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
