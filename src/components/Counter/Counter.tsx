import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {CounterType} from "../../App/App";
import {AppRootState} from "../../App/store";
import {incrementAC, resetAC} from "../../model/counter-reducer";
import {Button} from "../Button/Button";
import './Counter.css'

export const Counter = () => {
    const dispatch = useDispatch()
    const {
        count,
        maxValue,
        errorMessage,
        disabledInc,
        disableReset
    } = useSelector<AppRootState, CounterType>((state) => state.counter)

    const incrementCount = () => {
        if (count < maxValue) {
            dispatch(incrementAC())
        }
    };

    const resetCounter = () => {
        dispatch(resetAC())
    };

    return (
        <div className="counterBox">
            <h1 className={count === maxValue ? "countEnd" : "scoreboard"}>{count}</h1>
            <p style={{color: "red"}}>{errorMessage}</p>
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

