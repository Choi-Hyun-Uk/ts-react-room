import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers, AnyAction, Reducer } from '@reduxjs/toolkit';
import registerSlice, { InitialState } from './registerSlice';

const combinedReducer = combineReducers({
  register: registerSlice.reducer,
});

const rootReducer: Reducer<InitialState, AnyAction> = (state, action) => {
  if ( action.type === HYDRATE ) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    }
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;