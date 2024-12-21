import React from 'react'
import Controls from './controls'
import Playlisttabs from './playlist-tabs'


const Playlistright = () => {
    return (
        <>
            <div className="right bg-cgrey rounded-xl relative flex-1 p-3 pb-0 mr-2">
                <div className="playlisttabsright  flex flex-wrap overflow-y-scroll items-start">
                <Playlisttabs/>
                <Playlisttabs/>
                <Playlisttabs/>
                <Playlisttabs/>
                <Playlisttabs/>
                <Playlisttabs/>
                <Playlisttabs/>

                </div>
                <div className="controlscon ">
                    <Controls/>
                </div>
            </div>
        </>
    )
}

export default Playlistright
