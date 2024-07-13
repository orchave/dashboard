"use client"
import { store } from '@/app/store/store'
import React from 'react'
import { Provider } from 'react-redux'
import Navbar from './Navbar'

export const GlobalProvider = (
    { children }: Readonly<{ children: React.ReactNode }>
) => {
  return (
    <Provider store={store}>
    <Navbar />
 
    <div className="relative bg-[#121212] min-h-screen flex-1 pt-48 w-full mb-10">
      {children}
    </div>
  
    </Provider>
  )
}
