import React from "react";
import "../index.css";

const Card = ({ e }) => {
  const back =
    "https://img.freepik.com/free-photo/digital-art-style-illustration-thunderstorm_23-2151812839.jpg?ga=GA1.1.1548358193.1726986305&semt=ais_hybrid";
  return (
    <div className="h-[40vh]  w-[17.5em] lg:w-[16em] p-4 rounded-xl flex flex-col gap-4 items-center border-4 border-transparent shadow-glow hover:shadow-glow-hover ">
      <div className="flex flex-col w-[80%] h-[100%] gap-3 justify-center items-center">
        <img
          src={e.sprites.front_default}
          alt=""
          className="h-[85%]  object-cover border-2 rounded-lg shadow-inner-glow "
        />
        <h1 className="ctxt  text-2xl  capitalize text-zinc-100 ">{e.name}</h1>
      </div>
    </div>
  );
};

export default Card;
