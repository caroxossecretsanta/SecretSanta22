import React, { useState } from 'react';
import './form.css';
import { useNavigate } from 'react-router-dom';

interface FormProps {
  answer: string;
}

function Form(props: FormProps) {
  const [value, setValue] = useState('');
  const [correct, setCorrect] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    correct ? alert('CONGRATULATIONS.') : alert('TRY AGAIN,');
    if (correct) navigate('/SecretSanta22/2');
  };

  const handleChange = (e: any) => {
    setValue(e.target.value);
    e.target.value === props.answer ? setCorrect(true) : setCorrect(false);
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
      </form>
    </div>
  );
}

export default Form;
