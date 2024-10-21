import logo from './logo.svg';
import './App.css';
import Button from './Botao';
import { useState } from 'react';

const App = () => {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [result, setResult] = useState(0);

  return (
    <>
    <h1>Calculator</h1>
    <div>
      <label>First Number</label>
      <input value={firstNumber} onChange={e => setFirstNumber(Number(e.target.value))} />

      <label>Second Number</label>
      <input value={secondNumber} onChange={e => setSecondNumber(Number(e.target.value))} />

      <span>Result: {result}</span>
    </div>
    <button onClick={() => setResult(firstNumber + secondNumber)}>+</button>
    <button onClick={() => setResult(firstNumber - secondNumber)}>-</button>
    <button onClick={() => setResult(firstNumber * secondNumber)}>*</button>
    <button onClick={() => setResult(firstNumber / secondNumber)}>/</button>
    </>
  );
}

export default App;
