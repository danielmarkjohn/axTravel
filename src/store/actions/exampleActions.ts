// src/store/actions/exampleActions.ts
import { increment, decrement, incrementByAmount } from '../reducers/exampleReducer';

export const incrementAsync = () => (dispatch: any) => {
  setTimeout(() => {
    dispatch(increment());
  }, 1000);
};

export const decrementAsync = () => (dispatch: any) => {
  setTimeout(() => {
    dispatch(decrement());
  }, 1000);
};

export const incrementByAmountAsync = (amount: number) => (dispatch: any) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};