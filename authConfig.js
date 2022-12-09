export const msalConfig = {
    auth: {
        clientId: "10374627-2dc5-4ac1-9cac-db57b1b410ba",//import.meta.env.VITE_CLIENT_ID,
        authority: `https://${import.meta.env.VITE_TENENT}.b2clogin.com/${import.meta.env.VITE_TENENT}.onmicrosoft.com/B2C_1_sign_up_and_sign_in`,//import.meta.env.VITE_AUTHORITY, // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
        knownAuthorities:[`${import.meta.env.VITE_TENENT}.b2clogin.com`],
        redirectUri: "/",
        postLogoutRedirectUri: "/", // Indicates the page to navigate after logout.
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
    scopes: ["https://dperera.onmicrosoft.com/task-api/task.read","https://dperera.onmicrosoft.com/task-api/task.write"]
};

// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};
