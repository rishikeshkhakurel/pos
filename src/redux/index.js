import { configureStore } from "@reduxjs/toolkit";
import editSlice from "./slice/edit.Slice";
import productSlice from "./slice/Product.Slice";
import userSlice from "./slice/User.Slice";

const store = configureStore({
    reducer:{
        productSlice:productSlice.reducer,
        editSlice:editSlice.reducer,
        userSlice:userSlice.reducer,

    }
})

export default store;
