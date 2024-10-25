import './App.css';
import { useEffect, useState } from 'react';
import { useLog } from './hooks/useLog';


 const Calculadora = () => {
    const [number, setNumber] = useState(1);

    const [text, setText] = useState("Vyni")
    
    
    const handleText = () => {
        console.log(text + " jr");
    }

    const handle = () => {
        console.log("eu " + number);
    }
useLog(0)
  
return(
<>
<h1>Criando uma Calculadora</h1>
<div>
    <button onClick={handle}>Clique aqui</button>
    <button onClick={handleText}>Clique pro texto</button>
</div>
</>
);
}

export default Calculadora