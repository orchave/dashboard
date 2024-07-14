"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import Background from "@/assets/background.svg";
import Cross from "@/assets/cross.svg";
import { DataType } from '../../types/data';

const Publish = () => {
  const [values, setValues] = useState<DataType>({
    url: '',
    name: '',
    type: '',
    description: ''
  });


  const handleChange = (e: any) => {
    const { name, value, options } = e.target;

    if (name === "category") {
      const selectedOptions = Array.from(options)
        .filter((option: any) => option.selected)
        .map((option: any) => option.value);

      setValues({
        ...values,
        category: selectedOptions,
      });
    } else {
      setValues({
        ...values,
        [name]: value,
      });
    }
  };

  const handleDelete = (v: string) => {
    setValues((prev) => ({
      ...prev,
      category: prev.category?.filter((category) => category !== v),
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Submitted values:", values);
  };

  return (
    <div className='relative min-h-screen mb-10 flex flex-col items-center '> 
      <Image
        src={Background}
        alt="background"
        width={1783}
        height={1783}
        className="min-h-screen z-10 top-4 fixed"
      />
      <form onSubmit={handleSubmit} className="relative z-20 p-4 flex flex-col justify-start gap-5 w-[600px]">
        <div className='flex justify-center items-center gap-2'>
          <div >
            <label className='text-white text-start mb-1 font-thin'>URL</label>
            <input
              type="text"
              name="url"
              placeholder="https/"
              className="outline-none text-white text-inherit mb-2 bg-[#272727] rounded-[47px] w-[456px] h-[48px] py-3 px-5"
              value={values.url}
              onChange={handleChange}
            />
          </div>
          <select
            name="type"
            value={values.type}
            onChange={handleChange}
            className="outline-none text-[#CEFFD1] text-inherit text-sm bg-[#272727] rounded-[47px] w-[127px] h-[48px] p-3 !pr-5 text-center mt-3 flex-1"
          >
            <option value="GET" className='text-[#CEFFD1]'>GET</option>
            <option value="POST" className='text-[#CEFFD1]'>POST</option>
          </select>
        </div>
        <div className='flex flex-col  items-start'>
          <label className='text-white text-start mb-1 font-thin'>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="outline-none text-white text-inherit mb-2 bg-[#272727] rounded-[47px] w-[380px] h-[48px] py-3 px-5"
            value={values.name}
            onChange={handleChange}
          />
        </div>
        <div className="flex gap-4 w-[950px] flex-wrap">
          {values?.category?.map((v, index) => (
            <div
              onClick={() => handleDelete(v)}
              className="max-w-[40%] text-xs truncate border-dark-primary-100 cursor-pointer group inline-flex items-center bg-[#484848] rounded-full text-white p-2 overflow-hidden whitespace-nowrap"
              key={index}
            >
              <span className="truncate">{v}</span>
              <div className="w-5 h-5 ml-2 text-dark-primary-100 rounded-full flex items-center justify-center">
                <Image
                  src={Cross}
                  alt="cross"
                  width={20}
                  height={20}
                  className="hidden group-hover:inline-block text-dark-primary-100"
                />
              </div>
            </div>
          ))}
        </div>
        <div className='flex flex-col  items-start'>
          <label className='text-white text-start mb-1 font-thin'>Description</label>
          <textarea
            rows={4}
            name="description"
            placeholder="Description"
            className="outline-none text-white text-inherit mb-4 bg-[#272727] rounded-[47px] w-full h-[100px] py-3 px-5"
            value={values.description}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className='rounded-[45px] py-[10px] px-6 bg-[#CEFFD1] text-black font-thin flex !justify-start items-center w-[94px]'
        >
          Publish
        </button>
      </form>
    </div>
  );
}

export default Publish;
