import { useDispatch, useSelector } from 'react-redux';
import { Actions, RootState } from './store';
import './App.css';

function App() {
  const state = useSelector<RootState>((state) => state) as RootState;
  const dispatch = useDispatch();

  return (
    <div className='App'>
      <div>{state.showCount ? state.count : undefined}</div>
      <button onClick={() => dispatch({ type: Actions.INCREMENT })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: Actions.DECREMENT })}>
        Decrement
      </button>
      <button
        onClick={() => dispatch({ type: Actions.INCREMENT_BY_X, amount: 10 })}
      >
        Incement By 10
      </button>
      <button
        onClick={() => dispatch({ type: Actions.DECREMENT_BY_X, amount: 10 })}
      >
        Decrement By 10
      </button>
      <button onClick={() => dispatch({ type: Actions.TOGGLE_COUNTER })}>
        Toggle Counter
      </button>
    </div>
  );
}

export default App;
