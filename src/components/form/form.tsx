import React, { useState } from 'react';
import './form.css';
import { useNavigate } from 'react-router-dom';

interface FormProps {
  answer: string;
  nextPage: string;
  cookie: string;
  clue: string;
}

function Form(props: FormProps) {
  const [value, setValue] = useState('');
  const [correct, setCorrect] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    correct ? alert(props.clue.toUpperCase()) : alert('TRY AGAIN.');
    if (correct) {
      localStorage.setItem('COMPLETED_PUZZLES', props.cookie);
      navigate(props.nextPage);
    }
  };

  const handleChange = (e: any) => {
    setValue(e.target.value);
    e.target.value.toLowerCase() === props.answer.toLowerCase()
      ? setCorrect(true)
      : setCorrect(false);
  };

  return (
    <div className="form-parent">
      <form onSubmit={handleSubmit}>
        <input
          className="Form"
          type="text"
          placeholder="ANSWER HERE"
          value={value}
          onChange={handleChange}
        />
        <input type="submit" />
        <b className="word-counter">
          {value.length}/{props.answer.length}
        </b>
      </form>
    </div>
  );
}

export default Form;
