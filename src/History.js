import React from 'react';
import HistoryItem from './HistoryItem';

 const History = (props) => {

    return(
    <>
    <h2>Exibindo o histórico</h2>
    <ul>
      {props.resultado.map((item, index) => (
        <HistoryItem key={index} item={item}/>
      ))}
    </ul>
    </>
    )
}

export default History