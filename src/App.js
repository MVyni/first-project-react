
import './App.css';

import { useState } from 'react';

const App = () => {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [result, setResult] = useState(0);
  const [history, setHistory] = useState([]);

  const handleOperation = (operation) => {
    let newResult;

    switch(operation){
      case "+": 
        newResult = firstNumber + secondNumber;
        break;

      case "-":
        newResult = firstNumber - secondNumber;
        break;

      case "*":
        newResult = firstNumber * secondNumber;
        break;

      case "/":
        newResult = secondNumber !== 0 ? firstNumber / secondNumber: "Erro";
        break;

      default:
        return;
    }
    setResult(newResult);
    setHistory([...history, "${firstNumber} ${operation} ${secondNumber} = ${newResult}"]);
  };

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
    <button onClick={() => handleOperation("+")}>+</button>
    <button onClick={() => handleOperation("-")}>-</button>
    <button onClick={() => handleOperation("*")}>*</button>
    <button onClick={() => handleOperation("/")}>/</button>
    
    <h2>Exibindo o histórico</h2>
    <ul>
      {history.map((item, index) => (
        <li key={index}>{item}</li> //--- "key = {index}" é uma chave para react saber distintiguir com particularidade cada item, no caso o "index" nunca é repetido dentro de uma array e assim o torna a "key" unica para cada item. 
      ))}
    </ul>
    </>
  );
};



export default App;
