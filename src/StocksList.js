import { Container } from "@material-ui/core";
import React, { useState } from "react";
import StocksData from "./StocksData";

const products = [
  {
    id: 1,
    name: "Jbl bluetooth spekers",
    price: 449,
    image: "./stockImages/jbl2.jpg",
  },
  {
    id: 2,
    name: "Dell xps laptop",
    price: 1449,
    image: "./stockImages/dell.jpg",
  },
  {
    id: 3,
    name: "MacBook Pro",
    price: 2449,
    image: "./stockImages/MacBook1.jpg",
  },
  {
    id: 4,
    name: "Mifi Router",
    price: 39,
    image: "./stockImages/4G-LTE-mifi-Router.jpg",
  },
  {
    id: 5,
    name: "Laptop Hard Drive",
    price: 79,
    image: "./stockImages/laptop harddrive2.jpg",
  },
  {
    id: 6,
    name: "Hp 83A Cartridge",
    price: 99,
    image: "./stockImages/hp-83a-black.jpg",
  },
  {
    id: 7,
    name: "External Hard Drive",
    price: 109,
    image: "./stockImages/laptop external.jpg",
  },
  {
    id: 8,
    name: "laptop power pack",
    price: 29,
    image: "./stockImages/laptop charger2.jpg",
  },
];
function StocksList() {
  const newProducts = products.map((product) => {
    return (
      <div key={product.id}>
        <div
          className="card bg-gray-100git status my-2 w-3/4 rounded-lg 
        opacity-80 hover:opacity-100 cursor-pointer"
        >
          <img
            className="w-full overflow-none mx-auto"
            src={product.image}
            alt=""
          />
          <h2 className="py-2 px-2 uppercase">{product.name}</h2>
          <h4 className="font-bold px-2">${product.price}</h4>
          <div className="add-to-cart px-2">
            <button className="bg-blue-400 hover:bg-blue-300 py-1 px-2 rounded my-4">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="mx-8">
      <StocksData name={newProducts} />
    </div>
  );
}

export default StocksList;
