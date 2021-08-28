import React from "react";

function ShoppingHeader() {
  return (
    <header className="flex justify-between items-center px-16 bg-gray-300 rounded-lg 
    h-24 mx-4 my-2 text-blue-900">
      <div className="left text-2xl font-bold">
        <a href="">Small Shopping Cart</a>
      </div>
      <div className="right space-x-8">
        <a href="">Cart</a>
        <a href="">SignIn</a>
      </div>
    </header>
  );
}

export default ShoppingHeader;
