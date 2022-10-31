import { useState } from 'react';
import './App.css';


function App() {

  const [count,setCount]= useState(1)

   function add (){
    setCount(prev => prev + 1)
   }
   function subtract (){
    setCount(prev => prev - 1)
   }

   function reset(){
    setCount(prev => prev = 0)
   }
  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>
        <h1 >Counter App</h1>
        <h2>Count</h2>
        <h3>{count}</h3>
        <span className='btn'>
        <button onClick={subtract}> - </button>
        <button onClick={add}> + </button>
        <button onClick={reset}>Reset</button>
        </span>
        </div>
      </header>
    </div>
  );
}

export default App;
