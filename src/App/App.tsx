import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import {Counter} from "../components/Counter/Counter";
import {SettingsBlock} from "../components/SettingsBlock/SettingsBlock";
import {store} from "./store";

export type CounterType = {
    count: number
    maxValue: number
    errorMessage: string
    disabledInc: boolean
    disableReset: boolean
}

export type SettingBlockType = {
    maxValue: number
    startValue: number
    errorMessage: string
}

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <SettingsBlock/>
                <Counter/>
            </div>
        </Provider>
    )
}

export default App;
