import React, { useContext, useEffect, useState } from "react";
import { pokemonData } from "../Utils/Context";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import TopNav from "./TopNav";

import Cards from "./Cards";
const PokemonCont = () => {
  const { data, getpokiData } = useContext(pokemonData);

  const [filterData, setfilterData] = useState(null);
  const [searchValue, setsearchValue] = useState("");

  useEffect(() => {
    if (data && searchValue === "") setfilterData(data);
  }, [filterData, data, searchValue]);

  const handleFilter = (e) => {
    setsearchValue(e.target.value);

    if (searchValue === "") {
      setfilterData(data);
    } else {
      const pdataa = filterData.filter((p) =>
        p.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setfilterData(pdataa);
    }
  };
  return (
    filterData && (
      <div>
        <div className="container  flex flex-col mx-auto gap-6 ">
          <TopNav handleFilter={handleFilter} />

          <Cards
            filterData={filterData}
            getpokiData={getpokiData}
            data={data}
          />
        </div>
      </div>
    )
  );
};

export default PokemonCont;
