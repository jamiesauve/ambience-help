import React, { useEffect } from 'react'
import _ from 'lodash'

import './ThemeBox.css'

const ThemeBox = props => {
  useEffect(() => {
    const title = document.getElementsByClassName(`box-${props.label}`)[0];
    title.style.color = props.labelColor;
  }, [
    props.label,
    props.labelColor,
  ]);

  return (
    <div className="ThemeBox">
      <div className={`ThemeBox__label box-${props.label}`}>
        {props.label}
      </div>

      <div className="ThemeBox__track-list">
      {_.map(props.tracks, (track) => (
        <div
          className="ThemeBox__track"
          key={track.location}
          onClick={() => props.copyTrack(track.location)}
        >
          {track.label}
        </div>
      ))}
      </div>
    </div>
  )
}

export default ThemeBox