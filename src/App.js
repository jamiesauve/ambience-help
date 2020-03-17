import React from 'react'
import _ from 'lodash'

import ThemeBox from './Components/ThemeBox'
import tracks from './assets/tracks'

import './App.css';


function App() {
  const copyTrack = (location) => {
    const url = `https://michaelghelfi.bandcamp.com/track/${location}`
    const command = `;;play ${url}`

    navigator.clipboard.writeText(command)
  }

  return (
    <div className="App">
      {_.map(tracks, (categoryData, categoryName) => (
        <ThemeBox
          copyTrack={copyTrack}
          key={categoryName}
          label={categoryName}
          tracks={categoryData}
        />
      ))}
    </div>
  );
}

export default App
