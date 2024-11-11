import React from "react";

const Equipe = (props) => {
  return(
  <>  
  <Sobre usernamne={props.nome} idade={props.idade} cargo={props.cargo}/>
  <Social ld={props.linkdin}/>
  </>
  );
}

const Sobre = (props) => {
  return(
    <>
  <h2>Olá sou o(a) {props.usernamne}</h2>
  <h3>Idade: {props.idade}</h3>
  <h3>Cargo: {props.cargo}</h3>
  </>
  );
}

const Social = (props) => {
  return(
    <>
    <a>Facebook</a>
    <a href={props.ld}>LinkdIn</a>
    <a>Instagram</a>
    </>
  );
}

const App = () => {
  return(
    <>
        <h1>Conheça a nossa equipe:</h1>
        <Equipe nome="Vynicius" idade ="25" cargo="Gruista" linkdin="https://www.google.com"/>/>
        <Equipe nome="Carol" idade ="23" cargo="Vendedora" linkdin="https://www.google.com"/>
    </>
  )
};



export default App;
