import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import SaveAsISave from './pages/save-as-i-save/save-as-i-save';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <SaveAsISave
      imgPath="assets/c2VlIGFzIGkgc2Vl.png"
      vidPath="https://www.youtube.com/watch?v=oHASvG5amh8"
      width="800px"
      height="500px"
    />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
