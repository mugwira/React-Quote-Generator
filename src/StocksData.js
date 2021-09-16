import React from "react";
import StocksList from "./StocksList";

function StocksData(props) {
  return (
    <div>
      <div className=" md:grid grid-cols-3">
        {props.image}
        {props.name}
        {props.price}
      </div>
    </div>
  );
}

export default StocksData;
