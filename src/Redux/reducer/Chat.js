import { createSlice } from '@reduxjs/toolkit'

export const ChatSlice = createSlice({
  name: 'chat',
  initialState: {
   chat:[]
  },
  reducers: {
   setChatList(state,action){
        state.chat=[...state.chat,action.payload]
    }
  }
})
export const { setChatList } = ChatSlice.actions;

export default ChatSlice.reducer;