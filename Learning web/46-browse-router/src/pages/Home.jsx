import React from "react";
import { Link } from "react-router-dom";

function Home({heading, link, buttonText}) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="w-[80%] h-[500px]  bg-pink-300 relative"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1503455637927-730bce8583c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute w-full h-full flex justify-center items-center flex-col bg-black/25 p-20 border border-red-600">
          <h1 className="text-center text-4xl text-white">{heading}</h1>
          <p className="text-center mt-3 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sit
            officiis dolore dignissimos maxime facere. Ipsum voluptate
            blanditiis quae. Laudantium laborum, rerum vitae optio quo illo
            ducimus accusamus voluptas necessitatibus!
          </p>
          <Link to={link}> 
          <button className="m-5 p-3 text-white bg-[#BF435C] font-semibold">Go {buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
