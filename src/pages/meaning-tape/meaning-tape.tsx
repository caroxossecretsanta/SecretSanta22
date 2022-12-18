import ImageHeader from '../../components/image-header/image-header';
import Video from '../../components/video-player/video';
import Hint from '../../components/hint/hint';
import Form from '../../components/form/form';
import './meaning-tape.css';

interface MeaningTapeProps {
  imgPath: string;
  vidPath: string;
  width: string;
  height: string;
}

function MeaningTape(props: MeaningTapeProps) {
  return (
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
        nextPage="/SecretSanta22/finalpuzzle"
      />
    </div>
  );
}

export default MeaningTape;
