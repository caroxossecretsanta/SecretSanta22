import React from 'react';
import ImageHeader from '../../components/image-header/image-header';
import Video from '../../components/video-player/video';
import Hint from '../../components/hint/hint';
import Form from '../../components/form/form';
import './save-as-i-save.css';
import CheaterDetected from '../../components/cheater-detected/cheater-detected';

interface SaveAsISaveProps {
  imgPath: string;
  vidPath: string;
  width: string;
  height: string;
  clue: string;
}

function SaveAsISave(props: SaveAsISaveProps) {
  const cookie = localStorage.getItem('COMPLETED_PUZZLES');
  return parseInt(cookie!) >= 0 ? (
    <div>
      <ImageHeader path={props.imgPath} />
      <Video path={props.vidPath} width="700px" height="400px" />
      <Hint
        imagePath="https://media.discordapp.net/attachments/825881406017241178/1052735595601997924/hint.png"
        hintText="Save Image As Google B64"
        hintStyle="hint-image"
      />
      <Form
        answer="see as i see"
        nextPage="/SecretSanta22/1"
        cookie="1"
        clue={props.clue}
      />
    </div>
  ) : (
    <div>
      <CheaterDetected />
    </div>
  );
}

export default SaveAsISave;
