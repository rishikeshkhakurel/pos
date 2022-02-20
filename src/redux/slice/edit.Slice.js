import { createSlice } from "@reduxjs/toolkit";

const initState = {
  status: "idel",
  data: [],
  error: false,
};

const setData = (_, action) => ({
  status: "data",
  data: action.payload,
  error: false,
});

const editSlice = createSlice({
  name: "editSlice",
  initialState: initState,
  reducers: {
    setData,
  },
});

export default editSlice;
