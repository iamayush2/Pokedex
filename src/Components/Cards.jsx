import React from "react";
import Card from "./Card";
import InfiniteScroll from "react-infinite-scroll-component";
import "../index.css";
const Cards = ({ filterData, getpokiData, data }) => {
  return (
    <InfiniteScroll
      loader={
        <div className="container text-white bg-zinc-900  justify-center overflow-auto">
          <h1>Loading...</h1>
        </div>
      }
      hasMore={true}
      dataLength={data.length}
      next={getpokiData}
    >
      <h1 className="w-full h-fit flex text-center items-center justify-center text-3xl lg:text-5xl text-white mb-4">
        <span className="text-red-500 font-bold">Poke</span>
        <span className=" txt flex ">mons</span>
      </h1>
      <div className="w-full min-h-[86vh] overflow-hidden  flex flex-wrap gap-12  p-5  justify-center shrink-0 ">
        {filterData.map((e, i) => (
          <Card key={i} e={e} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default Cards;
