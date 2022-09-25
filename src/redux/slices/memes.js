import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    memes: [],
};

export const memeSlice = createSlice({
  name: 'meme',
  initialState,
  reducers: {
    setMemes: (state, action) => {
      return {
        ...state,
        memes: action.payload,
      };
    },
  }
});

// Action creators are generated for each case reducer function
export const { setMemes } = memeSlice.actions;

export default memeSlice.reducer;
