import React, { ChangeEvent, useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {SettingBlockType} from "../../App/App";
import {AppRootState} from "../../App/store";
import {setErrorMessageAC, updateSettingsAC} from "../../model/counter-reducer";
import { Button } from "../Button/Button";
import './SettingsBlock.css';

export const SettingsBlock = () => {
    const dispatch = useDispatch()
    const {
        maxValue,
        startValue,
        errorMessage,
    } = useSelector<AppRootState, SettingBlockType>((state) => state.counter)

    const [tempMaxValue, setTempMaxValue] = useState(maxValue);
    const [tempStartValue, setTempStartValue] = useState(startValue);

    const handleMaxValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.currentTarget.value);

        if (value < 0) {
            dispatch(setErrorMessageAC('Incorrect value'));
            e.currentTarget.style.border = '2px solid red';
        } else {
            dispatch(setErrorMessageAC(''));
            e.currentTarget.style.border = 'none';
            setTempMaxValue(value);
        }
    };

    const handleStartValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.currentTarget.value);

        if (value < 0 || value > tempMaxValue) {
            dispatch(setErrorMessageAC("Incorrect value"));
            e.currentTarget.style.border = '2px solid red';
        } else {
            dispatch(setErrorMessageAC(''));
            e.currentTarget.style.border = 'none';
            setTempStartValue(value);
        }
    };

    const setValues = () => {
        if (errorMessage === "") {
            dispatch(updateSettingsAC(
                { maxValue: tempMaxValue, startValue: tempStartValue }))
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
                <Button name={"Set"} onClick={setValues} className={'button'} disabled={!!errorMessage}/>
            </div>
        </div>
    );
};


