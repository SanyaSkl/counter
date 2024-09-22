import React from 'react';
import './Counter.css'
import {Button} from "../Button/Button";


export type CountType = {
    count: number;
    setCount: (count: number) => void;
    maxValue: number;
    startValue: number;
    errorMessage: string;
    disabledInc: boolean;
    setDisabledInc: (disabledInc: boolean) => void;
    disableReset: boolean;
    setDisableReset: (reset: boolean) => void;
}

export const Counter = (props: CountType) => {
    const {
        count,
        setCount,
        maxValue,
        startValue,
        errorMessage,
        disabledInc,
        setDisabledInc,
        disableReset,
        setDisableReset,
    } = props

    const incrementCount = () => {
        if (count < maxValue) {
            setCount(count + 1);
            setDisableReset(false);
        } else {
            setDisabledInc(true);
        }
    };

    const resetCounter = () => {
        setCount(startValue);
        setDisabledInc(false);
        setDisableReset(true);
    };

    return (
        <div className="counterBox">
            <h1 className={count === maxValue ? "countEnd" : "scoreboard"}>{count}</h1>
            <p style={{ color: "red" }}>{errorMessage}</p>
            <div className="buttonBox">
                <Button
                    className={'button'}
                    name={'Inc'}
                    onClick={incrementCount}
                    disabled={disabledInc}
                />
                <Button
                    className={'button'}
                    name={'Reset'}
                    onClick={resetCounter}
                    disabled={disableReset}
                />
            </div>
        </div>
    );
};

