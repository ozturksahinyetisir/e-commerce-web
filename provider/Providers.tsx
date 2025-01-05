"use client"

import React, { ReactNode } from "react";
import { Toaster } from 'react-hot-toast'


interface ProvidersProps {
    children: ReactNode; 
  }

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <>
    <Toaster
    position="top-right"
    reverseOrder={false}
    />
    {children}
    </>
  )
}

export default Providers