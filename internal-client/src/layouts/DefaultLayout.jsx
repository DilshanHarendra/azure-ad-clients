import React,{useEffect, useState} from "react";
import {AuthenticatedTemplate, useIsAuthenticated, useMsal} from "@azure/msal-react";
import {Outlet, useNavigate} from 'react-router-dom';
import Navbar from "./default/Navbar.jsx";
import Footer from "./default/Footer.jsx";
import {loginRequest} from "../../authConfig.js";
import Sidebar from "./default/Sidebar.jsx";


const DefaultLayout = () => {
    const navigate = useNavigate();
    const isAuthenticated= useIsAuthenticated()
    const {inProgress ,instance  } = useMsal();

    const [isOpenSidebar,setIsOpenSidebar] =  useState(true)
    const [isLoading,setIsLoading] =  useState(true)

    useEffect(()=>{
        if (inProgress === 'none'){
            setIsLoading(false)
        }else{
            setIsLoading(true)
        }

    },[inProgress])

    useEffect(()=>{
        if (!isAuthenticated && !isLoading){
            navigate("/")
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
            <div className="flex flex-col mx-auto w-full min-h-screen bg-gray-100 lg:pl-64">
               <Sidebar isOpenSidebar={isOpenSidebar} />
                <Navbar handleSidebar={()=>console.log("call")}/>
                <main id="page-content" className="flex flex-auto flex-col max-w-full pt-16">
                    <div className="max-w-10xl mx-auto p-4 lg:p-8 w-full">
                        <div
                            className="container items-center  rounded-lg bg-gray-50 text-gray-500 text-lg">
                            <Outlet/>
                        </div>
                    </div>
                </main>
                <Footer/>
            </div>
         <Navbar/>

        </>

    );
}
export default DefaultLayout
