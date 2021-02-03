import React from 'react';
import './Calculator.css';

import Button from '../Button';
import Display from '../Display';

export default function Calculator() {
    const addDigit = n => this.addDigit(n);
    return (
        <div className="Calculator">
            <Display value={100} />
            <Button label="AC" triple />
            <Button label="/" operation />
            <Button label="7" />
            <Button label="8" />
            <Button label="9" />
            <Button label="*" operation />
            <Button label="4" />
            <Button label="5" />
            <Button label="6" />
            <Button label="-" operation />
            <Button label="1" />
            <Button label="2" />
            <Button label="3" />
            <Button label="+" operation />
            <Button label="0" double />
            <Button label="," />
            <Button label="=" operation />
        </div>
    );
};