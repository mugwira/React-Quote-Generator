import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import {FaShoppingCart} from 'react-icons/fa';


function Nav() {
  return (
    <div className="my-nav bg-blue-100 py-5 px-4 md:px-24 ">
      <div className="my-links flex items-center justify-between">
        <div className="right text-2xl font-bold italic">
          <h3>Claire</h3>
        </div>
        <div className=" nav-links hidden sm:flex flex-1 justify-end items-center gap-12 ">
          <Link
            to="/about"
            className="transition duration-200 hover:text-gray-500 py-2"
          >
            About
          </Link>
          <Link to="/Todo" className="hover:text-gray-500 py-2">
            Todo
          </Link>
          <Link to="/Quotes" className="hover:text-gray-500 py-2">
            Quotes
          </Link>
          <Link to="/" className="hover:text-gray-500 py-2">
            Portifolio
          </Link>
          <Link to="Stocks" className="hover:text-gray-500 py-2">
            Stocks
          </Link>
          <Link
            to="/Login"
            className="text-white hover:bg-blue-400 py-0.5 px-3 rounded bg-blue-500"
          >
            Login
          </Link>
          <Link to="cart" className="text-lg hover:text-gray-500 py-2">
            <FaShoppingCart />
          </Link>
        </div>
        <div className="flex sm:hidden flex-1 justify-end cursor-pointer text-3xl font-bold">
          <AiOutlineMenu />
        </div>
      </div>
    </div>
  );
}

export default Nav;

//gap-12(flex property) works the same way as space-x-4 //
