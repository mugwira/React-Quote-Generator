import React from "react";
import {Zoom ,Fade, Slide } from 'react-reveal';

function Portifolio() {
  return (
    <div className="relative ">
        <section className="text-sm bg-white">
            <div className="content px-4 md:w-1/2  mx-auto py-20">
            <h2 className="font-semi-bold text-4xl py-4 text-center">Features</h2>
            <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Unde mollitia excepturi esse quos! Reiciendis quasi nam quibusdam 
                dicta quae possimus quis ea corrupti dolores? Amet quaerat itaque quas nam ullam.</p>
            </div>
            
        </section>
      <section className="container text-sm mt-4 sm:mt-12 sm:flex flex-col flex-1 gap-4 items-center md:flex-row">
        <div className="image z-10">
          <img
            className="sm:w-3/5 sm:h-3/5 md:w-2/4 md:h-2/4"
            src="./images/programming-concept.jpg"
            alt=""
          />
        </div>
        <Slide right>
        <div className="para">
          <h2 className="py-4 font-semibold text-2xl text-blue-600">
            Code Your Future
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea hic
            ipsa eum similique quis optio quam dolorem sunt eligendi amet.
          </p>
          <div className="buttons flex gap-10 my-8">
            <button className="bg-yellow-700 hover:bg-gray-100 px-6 py-2 rounded-md">
              View More
            </button>
            <button className="bg-gray-100 hover:bg-yellow-700 px-6 py-2 rounded-md">
              Explore
            </button>
          </div>
        </div>
        </Slide>
      </section>
      <div className="absolute hidden lg:block bg-blue-600 rounded-r-full h-60 w-2/4 
      md:left-0 overflow:hidden bottom-20"></div>
      
    </div>

    
    
  );
}

export default Portifolio;
