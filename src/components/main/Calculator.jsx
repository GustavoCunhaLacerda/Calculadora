import React, { useCallback } from 'react';
import './Calculator.css';

import Button from '../Button';
import Display from '../Display';

export default function Calculator() {

    const clearMemory = useCallback(_ => {
        console.log('Limpar');
    }, []);

    const setOperation = useCallback(operation => {
        console.log(operation);
    }, []);

    const addDigit = useCallback(n => {
        console.log(n);
    }, []);

    return (
        <div className="Calculator">
            <Display value={100} />
            <Button label="AC" click={clearMemory} triple />
            <Button label="/" click={setOperation} operation />
            <Button label="7" click={addDigit} />
            <Button label="8" click={addDigit} />
            <Button label="9" click={addDigit} />
            <Button label="*" click={setOperation} operation />
            <Button label="4" click={addDigit} />
            <Button label="5" click={addDigit} />
            <Button label="6" click={addDigit} />
            <Button label="-" click={setOperation} operation />
            <Button label="1" click={addDigit} />
            <Button label="2" click={addDigit} />
            <Button label="3" click={addDigit} />
            <Button label="+" click={setOperation} operation />
            <Button label="0" click={addDigit} double />
            <Button label="," click={addDigit} />
            <Button label="=" click={setOperation} operation />
        </div>
    );
};