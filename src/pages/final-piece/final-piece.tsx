import ImageHeader from '../../components/image-header/image-header';
import Video from '../../components/video-player/video';
import Hint from '../../components/hint/hint';
import Form from '../../components/form/form';
import './final-piece.css';
import CheaterDetected from '../../components/cheater-detected/cheater-detected';

interface FinalPieceProps {
  imgPath: string;
  vidPath: string;
  width: string;
  height: string;
  clue: string;
}

function FinalPiece(props: FinalPieceProps) {
  const cookie = localStorage.getItem('COMPLETED_PUZZLES');
  return parseInt(cookie!) >= 2 ? (
    <div>
      <ImageHeader path={props.imgPath} />
      <Video path={props.vidPath} width="700px" height="400px" click={false} />
      <Hint
        imagePath="https://media.discordapp.net/attachments/825881406017241178/1052735595601997924/hint.png"
        hintText="its in the waves https://convert.ing-now.com/audio-spectrogram-creator/"
        hintImage="https://media.discordapp.net/attachments/825881406017241178/1053843170707910676/Screenshot_2022-12-18_003209.png"
        hintStyle="hint-image"
      />
      <Form
        answer="the final piece"
        nextPage="/SecretSanta22/4"
        cookie="3"
        clue={props.clue}
      />
    </div>
  ) : (
    <div>
      <CheaterDetected />
    </div>
  );
}

export default FinalPiece;
