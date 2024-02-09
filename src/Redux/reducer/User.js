import { createSlice } from '@reduxjs/toolkit'

export const UserSlice = createSlice({
  name: 'user',
  initialState: {
    userData: null,
    login_status: false,
  },
  reducers: {
    setLoginStatus(state, action) {
      state.login_status = true
    },   
     setuser(state, action) {
      state.userData = action.payload
      state.login_status = true
    },
    logout(state, action) {
      state.userData = {}
      state.login_status = false
    }
  }
})
export const { setuser, logout,setLoginStatus } = UserSlice.actions;

export default UserSlice.reducer;