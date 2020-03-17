import React from 'react'
import _ from 'lodash'

import './ThemeBox.css'

const ThemeBox = props => {
  return (
    <div className = "ThemeBox">
      <div className = "ThemeBox__label">
        {props.label}
      </div>

      {_.map(props.tracks, (track, trackName) => (
        <div
          className="ThemeBox__track"
          key={track.location}
          onClick={() => props.copyTrack(track.location)}
        >
          {trackName}
        </div>
      ))}
    </div>
  )
}

export default ThemeBox