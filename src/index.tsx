import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import SaveAsISave from './pages/save-as-i-save/save-as-i-save';
import MeaningTape from './pages/meaning-tape/meaning-tape';
import FinalPiece from './pages/final-piece/final-piece';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const FirstPuzzle = (
  <SaveAsISave
    imgPath="https://media.discordapp.net/attachments/825881406017241178/1052735396150247504/c2VlIGFzIGkgc2Vl.png"
    vidPath="https://streamable.com/0vicre"
    width="800px"
    height="500px"
  />
);

const SecondPuzzle = (
  <MeaningTape
    imgPath="https://media.discordapp.net/attachments/825881406017241178/1053673322900103279/102706.png"
    vidPath="https://streamable.com/0ug6j9"
    width="800px"
    height="500px"
  />
);

const ThirdPuzzle = (
  <FinalPiece
    imgPath="https://media.discordapp.net/attachments/825881406017241178/1053844182172696596/fef7dbd5d379c401aaad75657115d56d.png"
    vidPath="https://streamable.com/sy49ec"
    width="800px"
    height="500px"
  />
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="SecretSanta22" element={FirstPuzzle} />
        <Route path="SecretSanta22/secondtrial" element={SecondPuzzle} />
        <Route path="SecretSanta22/finalpuzzle" element={ThirdPuzzle} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
