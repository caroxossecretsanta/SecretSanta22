import React, { useState } from 'react';

import './hint.css';

interface ImageButtonProps {
  path: string;
}

let currentStyle = 'fade-in-text';
function ImageButton(props: ImageButtonProps) {
  const [clicked, setClicked] = useState(false);
  const handleClick = (event: any) => {
    setClicked(!clicked);
    currentStyle = clicked ? 'fade-out-text' : 'fade-in-text';
    console.log(currentStyle);
  };

  return (
    <div className="hover-zoom">
      <img
        src={props.path}
        alt="hii"
        className="hover-zoom"
        onClick={handleClick}
      />
      {clicked && <p className={currentStyle}>Save Image As Google B64 </p>}
    </div>
  );
}

export default ImageButton;
