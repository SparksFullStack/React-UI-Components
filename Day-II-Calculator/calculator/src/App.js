import React from 'react';
import './App.css';
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";

let calcValue = 0;

const App = () => {
  return (
    <div className="app">
      <div className="row_1">
        <CalculatorDisplay currentValue={calcValue} />
      </div>

      <div className="row_2">
      </div>
      <div className="row_3">
      </div>
      <div className="row_4">
      </div>
      <div className="row_5">
      </div>
      <div className="row_6">
      </div>
    </div>
  );
};

export default App;
