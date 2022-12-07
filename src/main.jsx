import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "../authConfig.js"
import { BrowserRouter } from 'react-router-dom';
import {store} from "./store/store.js";
import {Provider} from "react-redux";

const msalInstance = new PublicClientApplication(msalConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <React.StrictMode>
            <Provider store={store}>
                <MsalProvider instance={msalInstance}>
                    <App />
                </MsalProvider>
            </Provider>
      </React.StrictMode>
    </BrowserRouter>
)
