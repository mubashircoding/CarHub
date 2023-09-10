"use client";

import Image from "next/image";
import SearchMenufacturer from "./SearchMenufacturer";
import React, { useState } from "react";
import { SearchBarProps } from "@/types";
const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="image"
      width={40}
      height={40}
      className=" object-contain"
    />
  </button>
);
const SearchBar = ({ setManufacturer, setModel }:SearchBarProps) => {
  const [searchModel, setSearchModel] = useState("");
  const [searchManufacturer, setsearchManufacturer] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchManufacturer === "" && searchModel.trim() === "") {
      return alert("Please fill in the search bar");
    }

    setModel(searchModel) 
    setManufacturer( searchManufacturer);
  };
 
  return (
    <form action="" className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchMenufacturer
          selected={searchManufacturer}
          setSelected={setsearchManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className=" absolute w-[20px] h-[20px] ml-4"
          alt="car model"
        />
        <input
          type="text"
          name="model"
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder="Model"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
