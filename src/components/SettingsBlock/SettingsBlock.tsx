import React, { ChangeEvent, useState } from 'react';
import { Button } from "../Button/Button";
import './SettingsBlock.css';

type SettingsBlockType = {
    maxValue: number;
    startValue: number;
    setErrorMessage: (incorrectValue: string) => void;
    errorMessage: string;
    updateSettings: (newMaxValue: number, newStartValue: number) => void;
    disabledSet: boolean
    setDisabledSet:(disabledSet: boolean) => void
};


export const SettingsBlock = (props: SettingsBlockType) => {
    const {
        maxValue,
        startValue,
        errorMessage,
        setErrorMessage,
        updateSettings,
        disabledSet,
        setDisabledSet
    } = props;

    const [tempMaxValue, setTempMaxValue] = useState(maxValue);
    const [tempStartValue, setTempStartValue] = useState(startValue);

    const handleMaxValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.currentTarget.value);

        if (value < 0) {
            setErrorMessage('Incorrect value');
            e.currentTarget.style.border = '2px solid red';
            setDisabledSet(true)

        } else {
            setErrorMessage("");
            e.currentTarget.style.border = 'none';
            setTempMaxValue(value);
            setDisabledSet(false)
        }
    };

    const handleStartValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.currentTarget.value);

        if (value < 0) {
            setErrorMessage("Incorrect value");
            e.currentTarget.style.border = '2px solid red';
        } else if (value > tempMaxValue) {
            setErrorMessage("Incorrect value");
            e.currentTarget.style.border = '2px solid red';
        } else {
            setErrorMessage("");
            e.currentTarget.style.border = 'none';
            setTempStartValue(value);
            setDisabledSet(false);
        }
    };

    const setValues = () => {
        if (errorMessage === "") {
            updateSettings(tempMaxValue, tempStartValue);
        }
    };

    return (
        <div className="counterBox">
            <div className="scoreboard">
                <div className='inputBox'>
                    <label>
                        Max value:
                        <input className='inputStyle'
                               type='text'
                               onChange={handleMaxValueChange} />
                    </label>
                    <label>
                        Start value:
                        <input className='inputStyle'
                               type='text'
                               onChange={handleStartValueChange} />
                    </label>
                </div>
            </div>

            <div className="buttonBox">
                <Button name={"Set"} onClick={setValues} className={'button'} disabled={disabledSet}/>
            </div>
        </div>
    );
};


