import React from "react";
import { FiSearch } from "react-icons/fi";

const TopNav = ({ handleFilter }) => {
  return (
    <div className=" container h-[11vh] lg:p-2 lg:h-[13vh]  mx-auto  flex px-6  items-end text-white ">
      <img
        src="pokiball.svg"
        alt=""
        className="object-fit h-[65%] lg:h-[100%] p-2  "
      />
      <div className="flex items-center justify-center h-[65%] w-[90%] gap-1">
        <FiSearch className="font-black text-xl" />
        <input
          onChange={handleFilter}
          type="search"
          className="w-[65%] lg:w-[50%] p-2 rounded-lg bg-black border-2 border-sky-600"
          placeholder="search"
        />
      </div>
    </div>
  );
};

export default TopNav;
