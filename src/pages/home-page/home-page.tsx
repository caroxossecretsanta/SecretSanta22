import React, { useState } from 'react';
import Countdown from 'react-countdown';
import { useNavigate } from 'react-router-dom';
import './home-page.css';

function HomePage() {
  const [enabled, setEnabled] = useState(false);
  localStorage.setItem('COMPLETED_PUZZLES', '-1');
  const navigate = useNavigate();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    localStorage.setItem('COMPLETED_PUZZLES', '0');
    navigate('/SecretSanta22/1');
  };

  const handleCompletion = () => {
    setEnabled(true);
  };

  return (
    <>
      <div>
        <p className="paragraph-text">Hello,</p>
        <p className="paragraph-text">
          Time is running out. It seems most of you haven't stepped up to
          complete your trials. Remember: In order to help others, you must
          first help yourself.
        </p>
        <p className="paragraph-text">
          You are the piece of someone else's puzzle. You might not know, as of
          yet, where you fit. But others will fill their own puzzles with pieces
          of you.
        </p>
        <p className="paragraph-text">2 days remain. Remember the rules.</p>
      </div>
      <Countdown
        className="paragraph-text"
        date={new Date('2022-12-12T17:00:00')}
        daysInHours
        onComplete={handleCompletion}
      />
      <div className="cheater-form">
        <form onSubmit={handleSubmit}>
          <input type="submit" value="PROCEED" disabled={!enabled} />
        </form>
      </div>

      <p className="paragraph-text">
        Note: You'll need a PC to solve the puzzles!
      </p>
    </>
  );
}

export default HomePage;
