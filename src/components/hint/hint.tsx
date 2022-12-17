import React, { useState } from 'react';

import './hint.css';

interface HintProps {
  imagePath: string;
  hintText: string;
  hintImage?: string;
}

let currentStyle = 'fade-in-text';
function ImageButton(props: HintProps) {
  const [clicked, setClicked] = useState(false);
  const handleClick = (event: any) => {
    setClicked(!clicked);
    currentStyle = clicked ? 'fade-out-text' : 'fade-in-text';
    console.log(currentStyle);
  };

  return (
    <div className="hint-parent">
      <img
        className="hover-zoom"
        src={props.imagePath}
        alt="Hint"
        onClick={handleClick}
      />
      {clicked && <p className={currentStyle}>{props.hintText} </p>}
      {clicked && props.hintImage && (
        <img
          className={currentStyle + ' hint-image'}
          src={props.hintImage}
          alt="Hint"
        />
      )}
    </div>
  );
}

export default ImageButton;
