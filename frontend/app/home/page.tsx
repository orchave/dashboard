"use client";
import Image from 'next/image';
import React,{useState} from 'react'
import axios from 'axios';

import  Icon  from "@/assets/value.svg"
import Background from "@/assets/background.svg"
import { DataType } from '../../types/data';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';


const Home = () => {

  const [data, setData] = useState<DataType[]>([]);

  const {search} = useSelector((state: RootState) => state.search);

  
  const get = async (search:string) => {
    try {
      const response = await axios.get(`http://localhost:3000/data`, {
        params: {
          search: search
        }
      });
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
 
 
  // const dummyData = [
  //   {
  //     address: "0x1f9090aa...8e676c326",
  //     time: "23 minutes ago",
  //     title: "Weather Data",
  //     value: 999,
  //     eth: "0.0002 ETH"
  //   },
  //   {
  //     address: "0x1f9090aa...8e676c326",
  //     time: "23 minutes ago",
  //     title: "Weather Data",
  //     value: 999,
  //     eth: "0.0002 ETH"
  //   },
  //   {
  //     address: "0x1f9090aa...8e676c326",
  //     time: "23 minutes ago",
  //     title: "Weather Data",
  //     value: 999,
  //     eth: "0.0002 ETH"
  //   },
  //   {
  //     address: "0x1f9090aa...8e676c326",
  //     time: "23 minutes ago",
  //     title: "Weather Data",
  //     value: 999,
  //     eth: "0.0002 ETH"
  //   },
  //   {
  //     address: "0x1f9090aa...8e676c326",
  //     time: "23 minutes ago",
  //     title: "Weather Data",
  //     value: 999,
  //     eth: "0.0002 ETH"
  //   },
  //   {
  //     address: "0x1f9090aa...8e676c326",
  //     time: "23 minutes ago",
  //     title: "Weather Data",
  //     value: 999,
  //     eth: "0.0002 ETH"
  //   },
  //   {
  //     address: "0x1f9090aa...8e676c326",
  //     time: "23 minutes ago",
  //     title: "Weather Data",
  //     value: 999,
  //     eth: "0.0002 ETH"
  //   },
  //   {
  //     address: "0x1f9090aa...8e676c326",
  //     time: "23 minutes ago",
  //     title: "Weather Data",
  //     value: 999,
  //     eth: "0.0002 ETH"
  //   }
  // ];

  return (
   <div className='relative min-h-screen mb-10'>
      <div className='w-full h-[200px] text-[#ceffd1] z-30 text-center text-[64px] title'>
      COMPREHENSIVE DATA
      <div >
      ARCHIVE
      </div>
      </div>
      <div className='w-full  text-[#AEAEAE] z-30 text-center text-[16px] font-inherit mb-24'>
      Access a wide range of data types securely and easily,
      <div> leveraging our robust decentralized platform.</div>
      </div>
 
    
      <Image
            src={Background}
            alt="search"
            width={1783}
            height={1783}
            className="min-h-screen z-10 top-4 fixed"
          />
    <div className='mx-10 my-5 flex flex-col justify-center items-center text-sm gap-4 text-inherit'>
      {data.map((data, index) => (
          <button  key={index} className="px-10 gap-5 flex justify-between items-center p-4 bg-[#272727] w-[982px] h-[52px] rounded-[30px] z-30">
  <div className='flex gap-x-3 justify-center items-center'>
            <h1 className=" font-normal text-white text-sm">{data.title}</h1>
            <h1 className=" font-normal text-white text-[10px]">{data.time}</h1>
            </div>
            <p className=" text-white text-sm">{data.address}</p>

  
            <h1 className=" font-bold bg-[#424242] text-[#c7c5c5] flex justify-center items-center gap-3 rounded-[45px] px-3 py-2 text-sm">    <Image
            src={Icon}
            alt="search"
            width={15}
            height={15}
            className="h-full"
          />{data.value}</h1>
            <p className=" text-[#ceffd1] text-sm">{data.eth}</p>



      
            </button>
      ))}
    </div>
    </div>

  )
}

export default Home