"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';

import Logo from "@/assets/logo.svg" 
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-[#121212] flex justify-between items-center p-4 shadow-lg z-50 text-white">
        <div className='w-full h-full flex justify-around items-center gap-x-10'>
        <Image
            src={Logo}
            alt="logo"
            width={92}
            height={56}
            className="h-full z-50"
          />
 <SearchBar />
    <div className='flex gap-x-[22px] '>
            <div className='flex gap-x-[25px] '>
            <button onClick={() => {
        // router.push("/publish");
      }}           className='rounded-[45px] py-[10px] px-6 bg-[#CEFFD1] text-black font-thin flex !justify-start items-center w-[154px]'>Birinci Buton</button>
            <button onClick={() => {
        // router.push("/publish");
      }}           className='rounded-[45px] py-[10px] px-6 bg-[#CEFFD1] text-black font-thin flex !justify-start items-center w-[154px]'>İkinci Buton</button>
      </div>

      </div>

        </div>
    </nav>
  )
}

export default Navbar