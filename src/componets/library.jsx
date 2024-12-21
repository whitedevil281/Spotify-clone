import React, { useEffect, useState } from 'react'
import '../css/library.css'
import Librarybar from './librarybar'


const Library = () => {
  return (
    <>
      <div className="sidebarleft bg-cgrey  ml-4 mr-2 ">
        <nav className='flex justify-between ml-2'>
          <button className='flex gap-3 items-center p-4'>
            <img src="/library-w.png" alt="" className='w-8' />
            <h2 className='libr text-xl font-medium '>Your library</h2>
          </button>
          <button className='m-5 '><img src="/plus.png" alt="" className='w-5' /></button>
        </nav>
        <Librarybar/>
        <Librarybar/>
        <Librarybar/>
        <Librarybar/>
        <Librarybar/>
      </div>
    </>
  )
}

export default Library
