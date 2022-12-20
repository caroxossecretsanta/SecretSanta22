import React from 'react';
import './cheater-detected.css';
import { useNavigate } from 'react-router-dom';

function CheaterDetected() {
  const navigate = useNavigate();
  const handleSubmit = (e: any) => {
    e.preventDefault();

    localStorage.setItem('COMPLETED_PUZZLES', '0');
    navigate('/SecretSanta22/1');
  };

  return (
    <>
      <div className="cheater-image">
        <img
          src={
            'https://cdn.discordapp.com/attachments/825881406017241178/1054479330375381084/4737cbe14703d02733d8b25f08707df8.png'
          }
          alt="CHEATER"
        />
      </div>
      <div className="cheater-image">
        <img
          src={
            'https://cdn.discordapp.com/attachments/825881406017241178/1054480196327198780/06ebbc4425e7191eabdf79f1ad32d9e9.png'
          }
          alt="CHEATER"
        />
      </div>

      <div className="cheater-form">
        <form onSubmit={handleSubmit}>
          <input type="submit" value="RESTART" />
        </form>
      </div>
    </>
  );
}

export default CheaterDetected;
