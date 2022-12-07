import React, {useEffect, useState,Suspense} from 'react'
import Router from "./router/Router.jsx";
import {useIsAuthenticated, useMsal} from "@azure/msal-react";
import axios from "axios";
import {graphConfig, loginRequest} from "../authConfig.js";
import {persistor, store} from "./store/store.js";
import {PersistGate} from 'redux-persist/lib/integration/react';
import LoadingPage from "./components/LoadingPage.jsx";
import { useDispatch } from 'react-redux'
import {setUser} from "./store/reducers/usersSlice.js";


function App() {
    const isAuthenticated= useIsAuthenticated()
    const dispatch = useDispatch()

    const { instance, accounts } = useMsal();

    const callMsGraph = (accessToken) => {
        return axios.get(graphConfig.graphMeEndpoint,{
            headers:{
                Authorization:`Bearer ${accessToken}`
            }
        })
    }


    const RequestProfileData = () =>{
        const request = {
            ...loginRequest,
            account: accounts[0]
        };
        // Silently acquires an access token which is then attached to a request for Microsoft Graph data
        instance.acquireTokenSilent(request).then((response) => {
            callMsGraph(response.accessToken).then(response => {
                dispatch(setUser(response.data))
            });
        }).catch((e) => {
            instance.acquireTokenPopup(request).then((response) => {
                callMsGraph(response.accessToken).then(response => {
                    dispatch(setUser(response.data))
                });
            });
        });
    }

    useEffect(()=>{
        if (isAuthenticated){
            RequestProfileData()
        }
    },[isAuthenticated])


    return (<PersistGate loading={<LoadingPage/>} persistor={persistor}>
        <Suspense fallback={<LoadingPage/>}>
            <Router />
        </Suspense>
    </PersistGate>)


}

export default App
