import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter} from "react-router-dom";
import store from "./store";
import App from "./scenes/App";


const rootElement = document.getElementById("index");

// Create an enhanced history that syncs navigation events with the store


render(
    <Provider store={store}>
        <BrowserRouter his>
            <App />
        </BrowserRouter>
    </Provider>,
    rootElement
);
