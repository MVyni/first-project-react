import './App.css';
import { useEffect, useState } from 'react';
import History from './History';


const App = () => {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [result, setResult] = useState(0);
  const [history, setHistory] = useState([]);
  const [opCount, setOpCount] = useState(0);
  
  const handleClear = () => {
    setHistory([]);
    setOpCount(0);
  }

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
    setHistory([...history, `${firstNumber} ${operation} ${secondNumber} = ${newResult}`]);

    setOpCount(opCount +1); // incrementando para total de operaçôes.
    
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
    
    <History resultado={history}/> 

    <button onClick={handleClear}>Clear History</button>

    <p>Operation Total: {opCount}</p>
    </>
  );
};



export default App;
