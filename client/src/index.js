import React from "react";
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import { thunk } from "redux-thunk";

import "./index.css";
import App from "./App";
import reducers from "./reducers";

const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});

const root = createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);