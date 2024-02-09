import { createSlice } from '@reduxjs/toolkit'

export const LoadSlice = createSlice({
  name: 'Load',
  initialState: {
    loading: false
  },
  reducers: {
    setLoadingShow(state, action) {
      state.loading = true
    },  
    setLoadingHide(state, action) {
      state.loading = false
    }
  }
})
export const { setLoadingShow, setLoadingHide } = LoadSlice.actions;

export default LoadSlice.reducer;