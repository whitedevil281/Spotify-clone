import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './componets/nav'
import './css/App.css'
import Library from './componets/library'
import Controls from './componets/controls'
import Playlistright from './componets/playlistright'
import './js/index.js'

function App() {
  useEffect(() => {
    let playlistbtn = document.querySelector(".libraryslide")
    let playlisttabsright = document.querySelector(".playlisttabsright")
    playlistbtn.addEventListener("click", (e) => {
      playlisttabsright.innerHTML = "<h1>HELO SATHYO </h1>"
    }
    )
  }, [])
  useEffect(() => {
    console.log("renderddddd");
  },[]
  )

  return (
<>
  <style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
</style>
  <Nav />
  <div className="home flex gap-5 ">
    <Library />
    <div className="rightsidepanel  w-full">
        <Playlistright />
    </div>
  </div>
  <script src="./js/index.js"></script>
</>

  )
}

export default App
