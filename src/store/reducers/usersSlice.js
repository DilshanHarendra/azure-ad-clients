import {createSlice} from '@reduxjs/toolkit';
const init = {
  user: null,
};

const usersSlice = createSlice({
  name: 'user',
  initialState: init,
  reducers: {
    setUser: (state,action) => {
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setUser} = usersSlice.actions;

export default usersSlice.reducer;
