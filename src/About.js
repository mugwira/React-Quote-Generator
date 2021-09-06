import React from "react";

function About() {
  return (
    <div className="about text-gray-100 md:grid gap-8 grid-cols-2 text-gray-100 mx-32 mt-16">
      <div className="left self-center">
        <img className="my-pic" src="sucre.jpg" alt="" />
      </div>
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
    </div>
  );
}

export default About;
