import React from 'react'


const Playlisttabs = () => {
    return (
        <>
            <div className="tab rounded-xl w-44 bg-black flex flex-col items-center p-4 ml-4 mt-4 ">
                <div className='relative'>
                        <img src="/coverplay.png" alt="" className='w-44 mb-2' />
                        <button className='p-3  rounded-full absolute right-2 top-24 hover:scale-110  opacity-0 hover:opacity-100 playbtn'>
                            <img src="/play-tab.png" alt="" className='w-3' />
                        </button>
                </div>
                <h2 className='text-2xl'>Playlist-1</h2>
                <h3 className='text-1xl'>23 songs ·</h3>
            </div>
        </>
    )
}

export default Playlisttabs
