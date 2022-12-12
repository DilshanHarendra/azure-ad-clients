import React from "react";


const Footer = ()=>{
    return <footer id="page-footer" className="flex flex-none items-center bg-white">
        <div
            className="text-center flex flex-col md:text-left md:flex-row md:justify-between text-sm max-w-10xl mx-auto px-4 lg:px-8 w-full">
            <div className="pt-4 pb-1 md:pb-4">
                <a href="/" target="_blank"
                   className="font-medium text-indigo-600 hover:text-indigo-400">Theme</a> © 2022
            </div>
            <div className="pb-4 pt-1 md:pt-4 inline-flex items-center justify-center">
                <span>Created </span>
                <svg className="hi-solid hi-heart inline-block w-4 h-4 mx-1 text-red-600" fill="currentColor"
                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"/>
                </svg>
                <span>by <a href="https://github.com/DilshanHarendra" target="_blank"
                            className="font-medium text-indigo-600 hover:text-indigo-400">Dilshan</a></span>
            </div>
        </div>
    </footer>
}
export default Footer
