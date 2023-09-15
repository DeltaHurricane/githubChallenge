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
      state.history = [action.payload.search, ...state.history];
    }
  },
},
);

export const selectHistory = (state: RootState) => state.history.history;

export default historySlice.reducer;
