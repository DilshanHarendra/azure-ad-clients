import {createSlice} from '@reduxjs/toolkit';
import jwt_decode from "jwt-decode";
const init = {
  user: null,
  token:null,
  activeAccount:null,
  tokenData:null
};

const usersSlice = createSlice({
  name: 'user',
  initialState: init,
  reducers: {
    setUser: (state,action) => {
      state.user = action.payload;
    },
    setToken: (state,action) => {
      const decodedHeader = jwt_decode(action.payload.accessToken);
      state.user = decodedHeader;
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
