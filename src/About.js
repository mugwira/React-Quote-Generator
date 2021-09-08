import React from "react";
import Typed from 'react-typed';
import {Zoom ,Fade, Slide } from 'react-reveal';


function About() {
  return (
    <div className="main">
     
    <div className="about text-gray-100 md:grid gap-8 grid-cols-2 text-gray-100 mx-32 mt-16">
      <div className="left self-center">
        <img className="my-pic" src="sucre.jpg" alt="" />
      </div>
      <Slide right>
      <div className="right text-gray-700 flex flex-col self-center">
        <h2 className="my-4 text-5xl text-blue-800">About Me</h2>
        <p className="text-sm md:text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo deleniti
          eligendi cupiditate repellat, harum inventore sit voluptatem facere
          itaque aspernatur non enim reiciendis nihil blanditiis animi quisquam,
          hic voluptas sed omnis numquam placeat. Incidunt nemo officiis autem
          magnam temporibus doloremque!
        </p>
      </div>
      </Slide>
     
    </div>
    <div className="typed text-center text-4xl font-semi-bold text-red-600 my-8">
        <Typed
          strings={["Web Development",
            "Front-End Dev",
            "Javascript",
            "React Js",
            "JQuery",
            "Tailwind Css and Bootstrap"
        ]}
        typeSpeed={80}
        backSpeed={40}
        loop
        />
      </div>
    </div>
  );
}

export default About;
