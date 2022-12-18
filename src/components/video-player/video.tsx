import ReactPlayer from 'react-player';
import './video.css';

interface VideoProps {
  path: string;
  width: string;
  height: string;
  click?: boolean;
}

function Video(props: VideoProps) {
  function getVideo() {
    navigator.mediaDevices
      .getUserMedia({
        video: { width: 1280 },
      })
      .catch((err) => {
        // always check for errors at the end.
        console.error(`${err.name}: ${err.message}`);
      });
  }

  return (
    <div className="Video">
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url={props.path}
          width={props.width}
          height={props.height}
          controls={true}
          onProgress={(e) => {
            if (props.click && e.playedSeconds > 4) {
              getVideo();
            }
          }}
        />
      </div>
    </div>
  );
}

export default Video;
