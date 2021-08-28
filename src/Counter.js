import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncreament = (prevState) => {
    setCount((prevState) => prevState + 1);
  };
  const handleDecreament = (prevState) => {
    setCount((prevState) => prevState - 1);
  };

  const handleReset = (prevState) => {
    setCount(0);
  };

  return (
    <div
      className="text-center my-16 font-bold bg-gray-100 w-1/4 m-auto
        rounded-lg shadow-lg"
    >
      <h1 className="text-6xl border-b">{count}</h1>
      <div className="first">
        <button
          className="bg-blue-300 py-2 px-4 my-8
             rounded-lg hover:bg-blue-200"
          onClick={handleIncreament}
        >
          Increament
        </button>
      </div>

      <div className="second">
        <button
          className="bg-blue-300 py-2 px-4 my-8
             rounded-lg hover:bg-blue-200"
          onClick={handleDecreament}
        >
          Decreament
        </button>
      </div>

      <div className="third">
        <button
          className="bg-blue-300 py-2 px-10 my-8
             rounded-lg hover:bg-blue-200"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
