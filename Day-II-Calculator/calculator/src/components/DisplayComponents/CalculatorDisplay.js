import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
    return (
        <div className="display">
            <p className="display__text">{props.currentValue}</p>
        </div>
    )
}

export default CalculatorDisplay;