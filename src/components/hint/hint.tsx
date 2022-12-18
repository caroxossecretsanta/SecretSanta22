import React, { useState } from 'react';

import './hint.css';

interface HintProps {
  imagePath: string;
  hintText: string;
  hintImage?: string;
  hintStyle: string;
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
      <div className="hover-zoom hint-parent">
        <img src={props.imagePath} alt="Hint" onClick={handleClick} />
      </div>

      {clicked && <p className={currentStyle}>{props.hintText} </p>}
      {clicked && props.hintImage && (
        <img
          // eslint-disable-next-line no-useless-concat
          className={`${currentStyle} ${props.hintStyle}`}
          src={props.hintImage}
          alt="Hint"
        />
      )}
    </div>
  );
}

export default ImageButton;
