import './App.css';
import { useEffect, useState } from 'react';
import { useLog } from './hooks/useLog';


 const Calculadora = () => {
    const [number, setNumber] = useState(0);
    const [result, setResult] = useState([number])

 
return(
<>
<h1>Criando uma Calculadora</h1>
<div>
    <label>Coloque um numero: </label>
    <input value={number} onChange={e => setNumber(Number(e.target.value))}/>
    <button onClick={() => console.log(result)}>Clique aqui</button>
</div>
</>
);
}

export default Calculadora
