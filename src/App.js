import { useState } from 'react';
import './App.css';

function App() {
  
  const [ display, setDisplay ] = useState('0');

  const handleNumber = (event) => {
  const number = event.target.textContent;
  if (display === '0') {
  setDisplay(number)} else {
    setDisplay(display + number);
  }
  };

  const handleOperator = (event) => {
    const operator = event.target.textContent;
    setDisplay(display + " " + operator + " ")
  };

  const handleEqual = () => {
    setDisplay(eval(display));
  }
  
  const handleDecimal = () => {
    const array = display.split(' ');
    const lastElement = array[array.length - 1];

    if (!lastElement.includes('.')) {
      setDisplay(display + '.');
    } 
  }

  const handleClear = () => {
    setDisplay('0');
  }
  
  return (
    <div className="App">
  <div className="calculator">
  <div id="display" className="row">{display}</div>
  <div id="clear" className="row" onClick={handleClear}>AC</div>
  <div id="seven" className='numbers' onClick={handleNumber}>7</div>
  <div id="eight" className='numbers' onClick={handleNumber}>8</div>
  <div id="nine" className='numbers' onClick={handleNumber}>9</div>
  <div id="multiply" className='operators' onClick={handleOperator}>*</div>
  <div id="four" className='numbers' onClick={handleNumber}>4</div>
  <div id="five" className='numbers' onClick={handleNumber}>5</div>
  <div id="six" className='numbers' onClick={handleNumber}>6</div>
  <div id="divide" className='operators' onClick={handleOperator}>/</div>
  <div id="one" className='numbers' onClick={handleNumber}>1</div>
  <div id="two" className='numbers' onClick={handleNumber}>2</div>
  <div id="three" className='numbers' onClick={handleNumber}>3</div>
  <div id="add" className='operators' onClick={handleOperator}>+</div>
  <div id="zero" className='numbers' onClick={handleNumber}>0</div>
  <div id="decimal" className='operators' onClick={handleDecimal}>.</div>
  <div id="equals" className='operators' onClick={handleEqual}>=</div>
  <div id="subtract" className='operators' onClick={handleOperator}>-</div>
  </div>
</div>
  );
}

export default App;
