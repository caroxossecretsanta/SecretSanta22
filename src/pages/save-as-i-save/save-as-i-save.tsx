import React from 'react';
import ImageHeader from '../../components/image-header/image-header';
import Video from '../../components/video-player/video';
import Hint from '../../components/hint/hint';

interface SaveAsISaveProps {
  imgPath: string;
  vidPath: string;
  width: string;
  height: string;
}

function SaveAsISave(props: SaveAsISaveProps) {
  return (
    <div>
      <ImageHeader path={props.imgPath} />
      <Video path={props.vidPath} width="800px" height="500px" />
      <Hint path="https://media.discordapp.net/attachments/825881406017241178/1052735595601997924/hint.png" />
    </div>
  );
}

export default SaveAsISave;
