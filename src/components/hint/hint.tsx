import React, { useState } from 'react';

import './hint.css';

interface HintProps {
  imagePath: string;
  hintText: string;
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
    <div className="hover-zoom">
      <img
        src={props.imagePath}
        alt="hii"
        className="hover-zoom"
        onClick={handleClick}
      />
      {clicked && <p className={currentStyle}>{props.hintText} </p>}
    </div>
  );
}

export default ImageButton;
