"use client"
import React,{useState} from 'react'
import Image from 'next/image'

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import Magic from "@/assets/magic.svg"
import Cross from "@/assets/cross.svg"
import { clearSearch, setSearch } from '@/app/store/search';

const SearchBar = () => {
  const {search} = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(event.target.value));
  };

  const deleteSearch = () => {
    dispatch(clearSearch());
  }

  return (
    <div className="w-full h-full">
    <label className="w-[436px] h-[42px] bg-[#272727] flex justify-center items-center text-[#ceffd1] rounded-[30px] py-3 px-5  mt-[7px] ml-[375px]">
    
      <input
        type="text"
        placeholder="Search"
        className="flex-1 bg-transparent outline-none text-white text-inherit "
        value={search}
        onChange={handleSearchChange}
      />
      <div className="text-white ml-2">
      {!search ? <Image src={Magic} alt="search" width={20} height={20} /> : 
     <button onClick={deleteSearch}>
       <Image src={Cross} alt="search" width={20} height={20} /></button>}
      </div>
    </label>
</div>
  )
}

export default SearchBar