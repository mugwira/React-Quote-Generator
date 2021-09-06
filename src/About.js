import React from "react";

function About() {
  return (
    <div className="about text-gray-100 grid grid-cols-2 mx-32">
      <div className="left">
        
        <img className="my-pic" src="sucre.jpg" alt="" />
      </div>
      <div className="right text-green-700 z-10 flex flex-col my-16 items-center">
        <h2 className="my-4 text-5xl">About Me</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo deleniti
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
