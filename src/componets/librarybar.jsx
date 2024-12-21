import React from 'react'
import '../js/library.js'



const Librarybar = () => {

  return (
    <>
      <div className="librarys pl-3 pr-3 pt-2 pb-2">
        <button  className='libraryslide w-full flex justify-between items-center bg-black rounded-md p-2'>
          <div className="playname ">
            <h2 className='text-xl'>Playlist-1</h2>
            <h2 className='text-xs text-lgrey text-400'>23 songs &middot;</h2>
          </div>
          <button><img src="/play.png" alt="" className='w-9' /></button>

        </button>
      </div>
    </>
  )
}

export default Librarybar
