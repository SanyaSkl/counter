import React from 'react';
import './Counter.css'
import {Button} from "../Button/Button";


type CountType = {
    count: number
    setCount: (count: number) => void
    disabledInc: boolean
    setDisabledInc: (disabledInc: boolean) => void
    disableReset: boolean
    setDisableReset: (reset: boolean) => void
}

export const Counter = (props: CountType) => {
    const {count, setCount, disabledInc, setDisabledInc, disableReset, setDisableReset} = props

    const incrementCount = () => {
        if (count <= 4) {
            setCount(count + 1)
            setDisableReset(false)
        } else {
            setDisabledInc(true)
        }
    }

    const resetCounter = () => {
        setCount(0);
        setDisabledInc(false)
        setDisableReset(true)
    }


    return (
        <div className="counterBox">
            <h1 className="scoreboard">{count}</h1>
            <div className="buttonBox">
                <Button
                    className={'button'}
                    name={'Inc'}
                    onClick={incrementCount}
                    disabled={disabledInc}/>
                <Button
                    className={'button'}
                    name={'Reset'}
                    onClick={resetCounter}
                    disabled={disableReset}/>
            </div>
        </div>
    );
};

