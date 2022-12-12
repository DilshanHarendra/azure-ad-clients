import React from "react";
import {loginRequest, permission} from "../../../../authConfig.js";
import {useMsal} from "@azure/msal-react";
import logo from "../../../assets/img/logo.jpeg"
const Login = ()=>{

    const {instance  } = useMsal();
    const handleLogin = () => {
        instance.loginRedirect(loginRequest).catch(e=>{
            console.log(e)
        })
    }

    return <>
        <div id="page-container" className="flex flex-col mx-auto w-full min-h-screen bg-gray-100">
            <main id="page-content" className="flex flex-auto flex-col max-w-full">
                <div className="min-h-screen flex flex-col bg-cover bg-bottom bg-center"
                     style={{backgroundImage: 'url("https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")'}}>
                    <div className="flex flex-grow md:w-8/12 lg:w-5/12 xl:w-4/12 bg-white shadow-xl">
                        <div className="flex flex-col p-8 lg:p-16 xl:p-20 w-full">
                            <div className="flex-grow flex items-center">
                                <div className="w-full max-w-lg mx-auto space-y-10">
                                    <div>
                                        <img className="w-full h-24 mb-8" src={logo} alt="logo"/>
                                        <h1 className="text-4xl font-bold inline-flex items-center mb-1 space-x-3">
                                            <span>Fashion</span>
                                        </h1>
                                        <p className="text-gray-500">
                                            Welcome, please sign in to your dashboard
                                        </p>
                                    </div>
                                    <div>
                                        <button type="button"
                                                onClick={()=>handleLogin(true)}
                                                className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none w-full px-4 py-3 leading-6 rounded border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700">
                                           Login
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="text-sm text-gray-500 text- pt-20">
                                <span
                                   className="font-medium text-indigo-600 hover:text-indigo-400"
                                   target="_blank">Created</span> by
                                <a href="https://github.com/DilshanHarendra"
                                   className="font-medium text-indigo-600 hover:text-indigo-400 ml-2"
                                   target="_blank">Dilshan</a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>

    </>
}
export default Login
