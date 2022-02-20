import { createSlice } from "@reduxjs/toolkit";

const initState = {
  status: "idel",
  data: {login:localStorage.getItem("login")},
  error: false,
};

const setData = (_, action) => ({
  status: "data",
  data: action.payload,
  error: false,
});

const userSlice = createSlice({
  name: "userSlice",
  initialState: initState,
  reducers: {
    setData,
  },
});

export default userSlice;
