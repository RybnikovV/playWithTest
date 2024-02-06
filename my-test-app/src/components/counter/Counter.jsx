import { useSelector, useDispatch } from 'react-redux';
import { getCounterValue } from '../../store/selectors/couneterSelector/counterSelector';
import { increment, decrement } from '../../store/reducers/counter/counterSlice';


export const Counter = () => {
  const counter = useSelector(getCounterValue);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(increment())
  };
  const decrementHandler = () => {
    dispatch(decrement())
  };

  return (
    <div data-testid="counter-component">
      <div data-testid="counter-value">значение счетчика - {counter}</div>
      <button 
        onClick={incrementHandler} 
        data-testid="counter-increment">
          Увеличить значение
        </button>
      <button 
        onClick={decrementHandler} 
        data-testid="counter-decrement">
          Уменьшить значение
      </button>
    </div>
  )
};