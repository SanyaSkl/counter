import '../App/App.css';
import {useDispatch, useSelector} from 'react-redux';
import {incValueAC} from './bll/counter-reducer';
import {AppStateType} from './bll/store';

export const AppCounter = () => {

    const value = useSelector<AppStateType, number>(state => state.counter.value)
    const dispatch = useDispatch()

    const incHandler = () => {
        dispatch(incValueAC())
    }

    return (
        <div className="App">
            <h1>{value}</h1>
            <button onClick={incHandler}>Count</button>
        </div>
    )
}