import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const pokemonData = createContext();

const Context = (props) => {
  const [data, setData] = useState([]);
  const [offset, setoffset] = useState(0);

  const getpokiData = async () => {
    try {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`
      );
      await fetchDataFromUrls(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  async function fetchDataFromUrls(data) {
    try {
      const fetchPromises = data.map((e) => axios.get(e.url));

      const responses = await Promise.all(fetchPromises);
      console.log(responses);
      setData((prev) => [...prev, ...responses.map((e) => e.data)]);

      setoffset((prev) => prev + 20);
      // console.log(data);
    } catch (error) {
      console.error("Error fetching data from URLs:", error);
    }
  }

  useEffect(() => {
    getpokiData();
  }, []);
  return (
    <pokemonData.Provider value={{ data, getpokiData }}>
      {props.children}
    </pokemonData.Provider>
  );
};

export default Context;
