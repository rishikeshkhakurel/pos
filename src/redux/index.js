import { configureStore } from "@reduxjs/toolkit";
import editSlice from "./slice/edit.Slice";
import productSlice from "./slice/Product.Slice";

const store = configureStore({
    reducer:{
        productSlice:productSlice.reducer,
        editSlice:editSlice.reducer,

    }
})

export default store;
