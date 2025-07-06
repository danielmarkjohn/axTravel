// src/store/reducers/index.ts
import { combineReducers } from '@reduxjs/toolkit';
import exampleReducer from './exampleReducer';

const rootReducer = combineReducers({
  example: exampleReducer,
});

export default rootReducer;