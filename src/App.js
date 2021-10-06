import './App.css';
import FunctionCounter from './FunctionCounter';
import Ball from './Ball';

function App() {
  return (
    <div className="App">
      <div >
         <FunctionCounter />
      </div>
      <br />

      <div>
        <Ball num={10} />
        <Ball num={9} />
        <Ball num={8} />
        <Ball num={7} />
        <Ball num={6} />
        <Ball num={5} />
        <Ball num={4} />
      </div>
      <br />
     
      
      
    </div>
  );
}

export default App;
