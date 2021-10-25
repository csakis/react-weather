import {createSlice} from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    query: ""
  },
  reducers: {
    setWeatherQuery: (state, action) => {
      state.query = action.payload;
    },
  }
});

export const {setWeatherQuery} = weatherSlice.actions;

export default weatherSlice.reducer;
