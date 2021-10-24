import { AnyAction, createStore, Reducer } from 'redux';

const initialState = { count: 0, showCount: true };

export type RootState = typeof initialState;

export enum Actions {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  INCREMENT_BY_X = 'INCREMENT_BY_X',
  DECREMENT_BY_X = 'DECREMENT_BY_X',
  TOGGLE_COUNTER = 'TOGGLE_COUNTER',
}

const counterReducer: Reducer<RootState, AnyAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case Actions.INCREMENT:
      return { ...state, count: state.count + 1 };
    case Actions.DECREMENT:
      return { ...state, count: state.count - 1 };
    case Actions.INCREMENT_BY_X:
      return { ...state, count: state.count + action.amount };
    case Actions.DECREMENT_BY_X:
      return { ...state, count: state.count - action.amount };
    case Actions.TOGGLE_COUNTER:
      return { ...state, showCount: !state.showCount };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
