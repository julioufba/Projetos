import React, { useState } from 'react';

import './App.css'; // Importe o arquivo CSS corretamente



function App() {
  const [num,setNum] = useState(0);
  const [oldnum, setOldNum]  = useState(0);
  const [operator, setOperator]  = useState();

  function inputNum(e){
    var input = e.target.value;
    if (num===0|| num === "Error"){
      if (input === '.'){
        return 
      }
      else{ 
        setNum(input);}}
    else{
      setNum(num+input);
      if (num.length>=9){
        setNum("Error")
      }

    }
  
  

  }
  function clear(){
    setNum(0);

  }
  function remover_ultimo_digito(){
    if (num.length <= 1){
      setNum(0)
    }
    else {
      setNum(num.slice(0, -1));
    }
  }
  function porcentagem(){
    setNum(num/100);
  }
  function sinal(){
    if (num>0){
      setNum(-num)}
    else {
      setNum(Math.abs (num))
    }
    }

  function operatorHandler(e){
    var operator_input=e.target.value;
    setOperator(operator_input);
    setOldNum(num);
    setNum(0)  ;
  }
  function calcular() {
    if (operator === '/') {
      if (parseFloat(num) === 0) {
        setNum("N faço milagre");
      } else {
        setNum(parseFloat(oldnum) / num);
      }
    } else if (operator === '+') {
      setNum(parseFloat(oldnum) + num);
    } else if (operator === '-') {
      setNum(parseFloat(oldnum) - num);
    } else if (operator === 'x') {
      setNum(parseFloat(oldnum) * num);
    }
  }
  

  

  return (
    <body>
    <main>
    <div class="area_preta">
    <h1 class="igual"> = </h1>
        <h1 class="numero_aparecer">{num}</h1>
        </div>
      <div class="botoes">
        
        <div class="linha_botoes">
        <button class="roxo" onClick={clear}>CE</button>
        <button onClick={remover_ultimo_digito}>C</button>
        <button onClick={porcentagem}>%</button>
        <button class="roxo" onClick={operatorHandler} value='/'>/</button>
        </div>
        <div class="linha_botoes">
        <button onClick={inputNum} value={7}> 7</button>
        <button onClick={inputNum} value={8}>8</button>
        <button onClick={inputNum} value={9}>9</button>
        <button class="roxo" onClick={operatorHandler}value='x'>x</button>
        </div>
        <div class="linha_botoes">
        <button onClick={inputNum} value={4}>4</button>
        <button onClick={inputNum} value={5}>5</button>
        <button onClick={inputNum} value={6}>6</button>
        <button class="roxo" onClick={operatorHandler}value='-' >-</button>
        </div>
        <div class="linha_botoes">
        <button onClick={inputNum} value={1}>1</button>
        <button onClick={inputNum} value={2}>2</button>
        <button onClick={inputNum} value={3}>3</button>
        <button class="roxo" onClick={operatorHandler}value='+' >+</button>
        </div>
        <div class="linha_botoes">
        <button onClick={sinal}>+/-</button>
        <button onClick={inputNum} value={0}>0</button>
        <button onClick={inputNum} value='.'>.</button>
        <button class="roxo"onClick={calcular}>=</button>
        </div>
        
      {
        
      }
      
      </div>
      
    </main>
    </body>
    
  )
}

export default App;





