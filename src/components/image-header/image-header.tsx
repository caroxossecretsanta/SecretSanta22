import React from 'react';

import './image-header.css';

interface ImageHeaderProps {
  path: string;
}

function ImageHeader(props: ImageHeaderProps) {
  return (
    <div className="Image">
      <img src={props.path} alt="SAVE AS" />
    </div>
  );
}

export default ImageHeader;
