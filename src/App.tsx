import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {SettingsBlock} from "./components/SettingsBlock/SettingsBlock";

function App() {
    const [count, setCount] = useState(0)
    const [disableReset, setDisableReset] = useState(true)
    const [disabledInc, setDisabledInc] = useState(false)
    const [disabledSet, setDisabledSet] = useState(false)
    const [maxValue, setMaxValue] = useState(5);
    const [startValue, setStartValue] = useState(0);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        const storedMaxValue = localStorage.getItem('maxValue');
        const storedStartValue = localStorage.getItem('startValue');

        if (storedMaxValue && storedStartValue) {
            setMaxValue(parseInt(storedMaxValue));
            setStartValue(parseInt(storedStartValue));
            setCount(parseInt(storedStartValue));
        }
    }, []);

    const updateSettings = (newMaxValue: number, newStartValue: number) => {
        if (newStartValue > newMaxValue || newStartValue < 0 || newMaxValue < 0) {
            setErrorMessage('Incorrect value');
        } else {
            setErrorMessage("");
            setMaxValue(newMaxValue);
            setStartValue(newStartValue);
            setCount(newStartValue);
            // Сохранение настроек в localStorage
            localStorage.setItem('maxValue', newMaxValue.toString());
            localStorage.setItem('startValue', newStartValue.toString());
        }
    };

    return (
        <div className="App">
            <SettingsBlock
                maxValue={maxValue}
                startValue={startValue}
                setErrorMessage={setErrorMessage}
                errorMessage={errorMessage}
                updateSettings={updateSettings}
                disabledSet={disabledSet}
                setDisabledSet={setDisabledSet}
            />
            <Counter
                count={count}
                setCount={setCount}
                disabledInc={disabledInc}
                setDisabledInc={setDisabledInc}
                disableReset={disableReset}
                setDisableReset={setDisableReset}
                maxValue={maxValue}
                startValue={startValue}
                errorMessage={errorMessage}
            />
        </div>
    )
}

export default App;
