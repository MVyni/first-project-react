import React from 'react';

 const History = (props) => {

    return(
    <>
    <h2>Exibindo o histórico</h2>
    <ul>
      {props.resultado.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    </>
    )
}

export default History