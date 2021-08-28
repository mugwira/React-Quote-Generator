import React, { useEffect, useState } from "react";
import { BiRefresh } from "react-icons/bi";

function QuoteGenerator() {
  const [content, setContent] = useState(null);
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    fetch("http://quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        const { content, author } = data;
        setContent(content);
        setAuthor(author);
      });
  }, []);

  return (
    <div className="text-center bg-yellow-100 w-1/2 mx-auto my-16 rounded">
      <h1 className="font-bold text-sm md:text-xl py-8 border-b px-4">
        Inspirational Quotes
      </h1>
      <div className="my-content px-4 py-8 md:py-16">
        {content ? (
          <div>
            <p className="text-sm md:text-lg py-2">{content}</p>
            <p className="italic text-sm py-2 text-gray-500">{author}</p>
          </div>
        ) : (
          <div className="spinner text-center"></div>
        )}
      </div>
      <div className="btn pb-4">
        <button
          className="rounded flex items-center mx-auto bg-blue-300 hover:bg-blue-400 hover:text-white py-2 px-4 my-8 my-4"
          onClick={() => window.location.reload(false)}
        >
          <BiRefresh className className="md:text-4xl" />
          <span className="mx-2">New Quote</span>
        </button>
      </div>
    </div>
  );
}

export default QuoteGenerator;
