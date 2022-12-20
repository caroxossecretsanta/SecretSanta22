import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import SaveAsISave from './pages/save-as-i-save/save-as-i-save';
import MeaningTape from './pages/meaning-tape/meaning-tape';
import FinalPiece from './pages/final-piece/final-piece';
import CheaterDetected from './components/cheater-detected/cheater-detected';
import FinalPage from './pages/final-page/final-page';
import HomePage from './pages/home-page/home-page';
import { isMobile } from 'react-device-detect';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Prelude = <HomePage />;

const FirstPuzzle = !isMobile ? (
  <SaveAsISave
    imgPath="https://media.discordapp.net/attachments/825881406017241178/1052735396150247504/c2VlIGFzIGkgc2Vl.png"
    vidPath="https://streamable.com/0vicre"
    width="800px"
    height="500px"
    clue="Why is six afraid of seven?"
  />
) : (
  <p className="paragraph-text">Please visit this website on your pc :)</p>
);

const SecondPuzzle = !isMobile ? (
  <MeaningTape
    imgPath="https://media.discordapp.net/attachments/825881406017241178/1053673322900103279/102706.png"
    vidPath="https://streamable.com/0ug6j9"
    width="800px"
    height="500px"
    clue="A bird in hand is worth 2 in the bush."
  />
) : (
  <p className="paragraph-text">Please visit this website on your pc :)</p>
);

const ThirdPuzzle = !isMobile ? (
  <FinalPiece
    imgPath="https://media.discordapp.net/attachments/825881406017241178/1053844182172696596/fef7dbd5d379c401aaad75657115d56d.png"
    vidPath="https://streamable.com/sy49ec"
    width="800px"
    height="500px"
    clue="2 birds with 1 stone"
  />
) : (
  <p className="paragraph-text">Please visit this website on your pc :)</p>
);

const FourthPuzzle = !isMobile ? (
  <FinalPage imgPath="https://media.discordapp.net/attachments/825881406017241178/1054486538609774742/1672c3d1ecf312666f04f759050bd55b.png" />
) : (
  <p className="paragraph-text">Please visit this website on your pc :)</p>
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="SecretSanta22" element={Prelude} />
        <Route path="SecretSanta22/1" element={FirstPuzzle} />
        <Route path="SecretSanta22/2" element={SecondPuzzle} />
        <Route path="SecretSanta22/3" element={ThirdPuzzle} />
        <Route path="SecretSanta22/4" element={FourthPuzzle} />
        <Route
          path="SecretSanta22/cheaterdetected"
          element={<CheaterDetected />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
