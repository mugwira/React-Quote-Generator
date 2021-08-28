import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

function ProductList() {
  const newProducts = [
    {
      id: 1,
      name: "Iphone 12 Plus",
      description: "500GB Storage, Gold in Color",
    },
    { id: 2, name: "Dell Laptop", description: "Corei9, 4Tb HDD, 16GB RAM" },
    { id: 3, name: "Hp Laptop", description: "Corei7 2Tb HDD, 16GB RAM" },
    { id: 4, name: "Lapto Screen", description: "15.6 inch, 30 pin, Slim" },
    {
      id: 5,
      name: "MiFi Router",
      description: "Huawei, 4G, supports up to 10 devices",
    },
  ];

  const [product, setProduct] = useState(newProducts);

  const handleDelete = (id) => {
    const product1 = product.filter((item) => item.id !== id);
    setProduct(product1);
  };

  return (
    <div
      className="product-list w-1/4 bg-gray-100 mx-auto my-8
            rounded
        "
    >
      <div className="text-center font-semi-bold ">
        {product.map((product) => {
          return (
            <div
              className="py-8 border-b shadow-lg flex justify-between px-4
                      transition duration-500 ease-in-out bg-gray-100 hover:bg-yellow-100 transform hover:-translate-y-1 hover:scale-110 my-4"
              key={product.id}
            >
              {product.name}
              <button
                className="mx-2 text-red-600 space-x-16 hover:text-red-300"
                onClick={() => handleDelete(product.id)}
              >
                <FaTrashAlt />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;
