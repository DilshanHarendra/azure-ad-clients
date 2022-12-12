import {createSlice} from '@reduxjs/toolkit';
const init = {
  user: null,
  token:null,
  activeAccount:null
};

const usersSlice = createSlice({
  name: 'user',
  initialState: init,
  reducers: {
    setUser: (state,action) => {
      state.user = action.payload;
    },
    setToken: (state,action) => {
      state.token = action.payload;
    },
    setActiveAccount: (state,action) => {
      state.activeAccount = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setUser,setToken,setActiveAccount} = usersSlice.actions;

export default usersSlice.reducer;
