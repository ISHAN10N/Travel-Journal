import './App.css'
import React from 'react'
import Navbar from "./components/Navbar"
import Place from "./components/Place"
import Data from "./Data"
import world from "./image/world.png"
import pointer from "./image/pointer.png"
function App() {
  const dataset = Data.map((itemdetails) => {
    return (
      <Place
        pointer={pointer}
        details={itemdetails}
      />
    )

  })
  return (
    <div className='app--container'>
      < Navbar img={world} />
      {dataset}
    </div>
  )
}

export default App;
