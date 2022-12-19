import React from 'react';
import ImageHeader from '../../components/image-header/image-header';
import CheaterDetected from '../../components/cheater-detected/cheater-detected';
import './final-page.css';

interface FinalPageProps {
  imgPath: string;
}

function FinalPage(props: FinalPageProps) {
  const cookie = localStorage.getItem('COMPLETED_PUZZLES');
  return parseInt(cookie!) >= 3 ? (
    <div>
      <ImageHeader path={props.imgPath} />
      <p className="paragraph-text">
        If you've been paying close attention, you now have the tools to
        decipher your gift.
      </p>
      <p className="paragraph-text">
        Remember - Friends are like puzzle pieces: If one piece is lost, it can
        never be replaced, and that puzzle will never get completed.
      </p>
      <p className="paragraph-text">You'll hear more from me soon ;)</p>
    </div>
  ) : (
    <div>
      <CheaterDetected />
    </div>
  );
}

export default FinalPage;
