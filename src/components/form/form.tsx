import React, { useState } from 'react';
import './form.css';

function Form() {
  const [answer, setAnswer] = useState('');
  const [correct, setCorrect] = useState(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    answer === 'see as i see' ? setCorrect(true) : setCorrect(false);
    console.log(correct);
  };

  return (
    <div className="form-parent">
      <form onSubmit={handleSubmit}>
        <input
          className="Form"
          type="text"
          placeholder="ANSWER HERE"
          onChange={(e) => setAnswer(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Form;
