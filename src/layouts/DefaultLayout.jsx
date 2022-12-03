import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../authConfig.js";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";


/**
 * Renders a button which, when selected, will open a popup for login
 */
export const DefaultLayout = () => {
    const { instance } = useMsal();

    const handleLogin = (loginType) => {
        if (loginType === "popup") {
            instance.loginPopup(loginRequest).catch(e => {
                console.log(e);
            });
        }
    }
    return (
        <>
            <AuthenticatedTemplate>
                <p>You are signed in!</p>
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <button variant="secondary" className="ml-auto" onClick={() => handleLogin("popup")}>Sign in using Popup</button>
            </UnauthenticatedTemplate>
        </>

    );
}
