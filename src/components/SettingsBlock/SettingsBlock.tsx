import React from 'react';
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;
import {Button} from "../Button/Button";
import './SettingsBlock.css'

export const SettingsBlock = () => {

    const SetValue = () => {
        console.log('set')
    }

    return (
        <div className="counterBox">
            <div className="scoreboard">
                <div className='inputBox'>
                <label >
                    Max value:
                    <input className='inputStyle' type='text' />
                </label>
                <label>
                    Start value:
                    <input className='inputStyle' type='text' />
                </label>
                </div>
            </div>

            <div className="buttonBox">
                <Button name={"Set"} onClick={SetValue} className={'button'}/>
            </div>
        </div>

    );
};


