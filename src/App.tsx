import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {SettingsBlock} from "./components/SettingsBlock/SettingsBlock";

function App() {
    const [count, setCount] = useState(0)
    const [disableReset, setDisableReset] = useState(true)
    const [disabledInc, setDisabledInc] = useState(false)


    return (
        <div className="App">
            <SettingsBlock/>
            <Counter
                count={count}
                setCount={setCount}
                disabledInc={disabledInc}
                setDisabledInc={setDisabledInc}
                disableReset={disableReset}
                setDisableReset={setDisableReset}
            />
        </div>
    )
}

export default App;
