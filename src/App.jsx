import React, {useEffect, useState,Suspense} from 'react'
import Router from "./router/Router.jsx";
import {useIsAuthenticated, useMsal} from "@azure/msal-react";
import axios from "axios";
import {graphConfig, loginRequest} from "../authConfig.js";
import {persistor, store} from "./store/store.js";
import {PersistGate} from 'redux-persist/lib/integration/react';
import LoadingPage from "./components/LoadingPage.jsx";
import { useDispatch,useSelector } from 'react-redux'
import {setUser,setToken,setActiveAccount} from "./store/reducers/usersSlice.js";
import {activeAccountSelectors} from "./store/selectors/userSelectors.js";

function App() {
    const isAuthenticated= useIsAuthenticated()
    const dispatch = useDispatch()
    const activeAccount = useSelector(activeAccountSelectors)

    const { instance, accounts,inProgress } = useMsal();

    const callMsGraph = (accessToken) => {
        return axios.get(graphConfig.graphMeEndpoint,{
            headers:{
                Authorization:`Bearer ${accessToken}`
            }
        })
    }


    const requestProfileData = () =>{
        const request = {
            ...loginRequest,
            account: activeAccount
        };
        // Silently acquires an access token which is then attached to a request for Microsoft Graph data
        instance.acquireTokenSilent(request).then((response) => {
            dispatch(setToken(response.accessToken))
            callMsGraph(response.accessToken).then(response => {
                dispatch(setUser(response))
            });
        }).catch((e) => {
            instance.acquireTokenPopup(request).then((response) => {
                dispatch(setToken(response.accessToken))
                callMsGraph(response.accessToken).then(response => {
                    dispatch(setUser(response))
                });
            });
        });
    }

    useEffect(()=>{
        if (isAuthenticated && inProgress == 'none'){
            const account = instance.getActiveAccount();
            if (account) {
                dispatch(setActiveAccount(account))
            }else{
                dispatch(setActiveAccount(accounts[0]))
                console.error("No active account! Verify a user has been signed in and setActiveAccount has been called.");
            }
        }
    },[isAuthenticated,inProgress,instance])

    useEffect(()=>{
        if (activeAccount){
            requestProfileData()
        }
    },[activeAccount])


    return (<PersistGate loading={<LoadingPage/>} persistor={persistor}>
        <Suspense fallback={<LoadingPage/>}>
            <Router />
        </Suspense>
    </PersistGate>)


}

export default App
