import React from "react";
import Hero from "./Hero.jsx";
import ProductsSection from "./ProductsSection.jsx";
import {AuthenticatedTemplate} from "@azure/msal-react";
const Home = ()=>{
    return <>
        <Hero/>
        <ProductsSection title="From Backend"/>
        <AuthenticatedTemplate>
            <ProductsSection title="Your Choice"/>
        </AuthenticatedTemplate>
        <ProductsSection title="New Arrivals"/>
        <ProductsSection title="Deals"/>

    </>
}
export default Home
