
import './App.css';

import { useState } from 'react';
import BotaoProps from './BotaoProps';

const App = () => {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [result, setResult] = useState(0);

  const handleClick = (valor) => {
    alert(valor)
  }

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
    
    <h2>Usando botao com props e fluxo de dados</h2>
    <BotaoProps onClick={handleClick}mensagemNoClique="Hello">Botão do Prop</BotaoProps>
    </>
  );
}


export default App;
