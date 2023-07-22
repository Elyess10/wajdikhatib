import React from "react";
import ReactPlayer from "react-player";

import "./styles.css";

export default function App() {

  return (
    <div className="App">
      <div className='player-wrapper'>
            <ReactPlayer
            className='react-player fixed-bottom'
            url= 'videos/video.mp4'
            width='100%'
            height='100%'
            controls = {true}
            style={{
              borderRadius: '50px',
            }}
            playing
            />
            {" "}{" "}{" "}Wajdi Khatib skills Video
        </div>
    </div>
  );
}
