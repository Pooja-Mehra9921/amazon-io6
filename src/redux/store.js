import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";
import appReducer from "./appReducer/appReducer";


export const Store = configureStore({

    reducer:{
app: appReducer,
    }
});

setupListeners(Store.dispatch);