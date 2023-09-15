import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '..';
import request, { ERequestStatus } from '../../common/request';
import { GitRepo, GitUser } from '../../model/simpleModel';
const apiBase = import.meta.env.VITE_GIT_API_BASE_URL;

export interface IUserSearchState {
  user: GitUser | null;
  repos: GitRepo[];
  status: ERequestStatus;
}

const initialState: IUserSearchState = {
  user: null,
  repos: [],
  status: ERequestStatus.IDLE,
};

export const fetchUser = createAsyncThunk('user/fetchUser', async (userName: string) => {
  const userResponse = await request.get<GitUser>(`${apiBase}${userName}`);
  if(userResponse.repos_url){
    const reposResponse = await request.get<GitRepo[]>(`${userResponse.repos_url}`);
    return {user: userResponse, repos:reposResponse, search:userName};
  }
  return {user: userResponse, repos:[], search:userName};
});

export const fetchUserRepos = createAsyncThunk('user/fetchUserRepos', async (reposUrl: string) => {
  const response = await request.get<GitRepo[]>(`${reposUrl}`);
  return response;
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (_state) => {
        const state = _state;
        state.status = ERequestStatus.LOADING;
      })
      .addCase(fetchUser.fulfilled, (_state, action) => {
        const state = _state;
        state.status = ERequestStatus.SUCCEEDED;
        state.user = action.payload.user;
        state.repos = action.payload.repos;
      })
      .addCase(fetchUser.rejected, (_state) => {
        const state = _state;
        state.status = ERequestStatus.FAILED;
      })
  },
});

export const selectUser = (state: RootState) => state.user.user;
export const selectStatus = (state: RootState) => state.user.status;
export const selectRepos = (state: RootState) => state.user.repos;

export default userSlice.reducer;

