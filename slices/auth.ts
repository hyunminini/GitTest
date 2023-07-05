import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface User {
  id: number;
  userName: string;
  displayName: string;
}

interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // 사용자 정보를 담음
    authorize(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    // 사용자 정보를 초기화
    logout(state) {
      // 업데이트 하는 과정에서 action을 사용하지 않으면 생략가능
      state.user = null;
    },
  },
});

export default authSlice.reducer;
export const {authorize, logout} = authSlice.actions;
