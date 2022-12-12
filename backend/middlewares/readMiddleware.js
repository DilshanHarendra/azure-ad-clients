const passport = require('../passportConfig');
const readMiddleware = (req,res,next) => {
    passport.authenticate('oauth-bearer', {
            session: false,

            /**
             * If you are building a multi-tenant application and you need supply the tenant ID or name dynamically,
             * uncomment the line below and pass in the tenant information. For more information, see:
             * https://github.com/AzureAD/passport-azure-ad#423-options-available-for-passportauthenticate
             */

            // tenantIdOrName: <some-tenant-id-or-name>

        }, (err, user, info) => {
        if (err) {
            /**
             * An error occurred during authorization. Either pass the error to the next function
             * for Express error handler to handle, or send a response with the appropriate status code.
             */
           return  res.status(401).json({ error: err.message });
        }
        if (!user) {
            // If no user object found, send a 401 response.
          return   res.status(401).json({ error: 'Unauthorized' });
        }
        if (info) {
            // access token payload will be available in req.authInfo downstream
            console.log(info)
            try {
                const scopes= info.scp.split(' ')
                if (scopes.includes('product.read')){
                    req.authInfo = info;
                    return   next();
                }else{
                    return   res.status(401).json({ error: 'Unauthorized' });
                }

            }catch (e) {
                return   res.status(401).json({ error: 'Unauthorized' });
            }

        }
    })(req, res, next);

}

module.exports = readMiddleware
