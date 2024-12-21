import React from 'react'

const Nav = () => {
  return (

    <>
    <nav className='flex justify-between relative items-center '>
        <div className="box1 flex items-center">
        <img src="/logo.png" alt="" className='w-16 my-2'/>
        <h2 className='text-xl '>Spotify</h2>
        </div>
        <div className="box2">
          <button className="home p-1 bg-cgrey rounded-xl">
            <img src="/home.png" alt="" className='w-9'/>
          </button>
        </div>
        <div className="box3  flex items-center">
            <button className='bg-white text-1xl h-11 px-3 text-black rounded-xl m-4 my-2 hover:scale-110'> Log in</button>
            <button className='bg-white text-1xl  h-11 px-3 text-black rounded-xl m-4 my-2 hover:scale-110'>Signup</button>
            <button><img src="/account.png" alt="" className='w-16 my-2'/></button>
        </div>
    </nav>
    </>
  )
}

export default Nav
