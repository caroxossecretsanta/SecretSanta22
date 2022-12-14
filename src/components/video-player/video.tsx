import React from 'react';
import ReactPlayer from 'react-player';
import './video.css';

interface VideoProps {
  path: string;
  width: string;
  height: string;
}

function Video(props: VideoProps) {
  return (
    <div className="Video">
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url={props.path}
          width={props.width}
          height={props.height}
          controls={true}
        />
      </div>
    </div>
  );
}

export default Video;
