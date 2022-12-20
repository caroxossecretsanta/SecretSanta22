import ImageHeader from '../../components/image-header/image-header';
import Video from '../../components/video-player/video';
import Hint from '../../components/hint/hint';
import Form from '../../components/form/form';
import CheaterDetected from '../../components/cheater-detected/cheater-detected';
import './meaning-tape.css';

interface MeaningTapeProps {
  imgPath: string;
  vidPath: string;
  width: string;
  height: string;
  clue: string;
}

function MeaningTape(props: MeaningTapeProps) {
  const cookie = localStorage.getItem('COMPLETED_PUZZLES');
  return parseInt(cookie!) >= 1 ? (
    <div>
      <ImageHeader path={props.imgPath} />
      <Video path={props.vidPath} width="700px" height="400px" click={true} />
      <Hint
        imagePath="https://media.discordapp.net/attachments/825881406017241178/1052735595601997924/hint.png"
        hintText="https://bit.ly/3hA3tas"
        hintImage="https://media.discordapp.net/attachments/825881406017241178/1053713438129528892/understand_the_numbers.gif"
        hintStyle="hint-image"
      />
      <Form
        answer="traumatic brain injury"
        nextPage="/SecretSanta22/3"
        cookie="2"
        clue={props.clue}
      />
    </div>
  ) : (
    <div>
      <CheaterDetected />
    </div>
  );
}

export default MeaningTape;
