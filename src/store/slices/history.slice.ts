import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '..';
import {fetchUser} from './user.slice';
import { GitRepo, GitUser } from '../../model/simpleModel';

export interface HistoryState {
  history: string[];
}

const initialState: HistoryState = {
  history: [],
};

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUser.fulfilled.type]: (_state, action: PayloadAction<{user:GitUser,repo:GitRepo, search:string}>) => {
      const state = _state;
      const noDuplicateHistory = state.history.filter(e => e !== action.payload.search);
      state.history = [action.payload.search, ...noDuplicateHistory];
    }
  },
},
);

export const selectHistory = (state: RootState) => state.history.history;

export default historySlice.reducer;
