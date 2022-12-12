import React,{useEffect, useState} from "react";
import {useIsAuthenticated, useMsal} from "@azure/msal-react";
import {Outlet, useNavigate} from 'react-router-dom';
import {loginRequest} from "../../authConfig.js";




const DefaultLayout = () => {

    const navigate = useNavigate();
    const isAuthenticated= useIsAuthenticated()
    const {inProgress   } = useMsal();

    const [isLoading,setIsLoading] =  useState(true)

    useEffect(()=>{
        if (inProgress === 'none'){
            setIsLoading(false)
        }
        if (inProgress === 'startup'){
            setIsLoading(true)
        }

    },[inProgress])

    useEffect(()=>{
        if (isAuthenticated){
            navigate("/dashboard")
        }
    },[isAuthenticated ,isLoading])


    if (isLoading){
        return <div className="w-screen h-screen grid place-items-center">
            <svg className="w-16 h-16" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{margin: 'auto', background: 'none', display: 'block', shapeRendering: 'auto'}} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <circle cx={50} cy={50} fill="none" stroke="#1b3ee5" strokeWidth={10} r={35} strokeDasharray="164.93361431346415 56.97787143782138">
                    <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1" />
                </circle>
            </svg>
        </div>
    }


    return (
        <>
           <Outlet/>
        </>

    );
}
export default DefaultLayout
