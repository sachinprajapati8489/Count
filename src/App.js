import React, { useRef, useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState(0);
  const step = useRef(0);

  const setStep = (value) => {
    step.current = value;
  };

  const increment = () => {
    setValue((state) => state + step.current);
  };

  const decrement = () => {
    setValue((state) => state - step.current);
  };

  const reset = () => {
    setValue(0);
  };

  return (
    <>
      <div className="container text-center my-5">
        <h1>{value}</h1>
        <div>
          <button className="btn btn-primary mx-2" onClick={increment}>+</button>
          <button className="btn btn-primary mx-2" onClick={decrement}>-</button>
        </div>
        <br/>
        <div>
          <label  className="btn btn-primary mx-2" htmlFor="step">Increment/Decrement</label>
          <input className="btn btn-primary mx-2"
            type="number"
            id="step"
            defaultValue={step.current}
            onChange={(e) => setStep(e.target.valueAsNumber)}
          />
        </div>
        <br/>
        <div>
          <button className="btn btn-primary mx-2" onClick={reset}>RESET</button>
        </div>
      </div>
    </>
  );
}

export default App;
