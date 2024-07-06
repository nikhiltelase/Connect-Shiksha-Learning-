import React from "react";
import "./card.css";

function Cards({ users }) {
  return (
    <>
      {users.map((user, index) => (
        <div
          key={index}
          className="w-[330px] h-96 flex items-center justify-center rounded-3xl m-4 relative z-10 "
          style={{
            backgroundImage: `url(${user.bgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex justify-center items-center flex-col">
            <img className="w-40 rounded-[50%] " src={user.img} alt="" />
            <h1 className="text-4xl text-white capitalize">{user.name}</h1>
            <h2 className=" text-white">age: {user.age}</h2>
            <h3 className=" text-white">
              {user.age >= 18
                ? "You are eligible for vote."
                : "You are not eligible for vote."}
            </h3>
          </div>
          <div className="bg-black w-[330px] h-96 absolute -z-10 opacity-40  rounded-3xl"></div>
        </div>
      ))}
    </>
  );
}

export default Cards;
