import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";


export const Store = configureStore({

    reducer:{

    }
})

setupListeners(Store.dispatch);