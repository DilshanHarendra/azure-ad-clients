const config = require("./config.json");
const passport = require('passport');

const BearerStrategy = require('passport-azure-ad').BearerStrategy;

const options = {
    identityMetadata: `https://${config.credentials.tenantName}.b2clogin.com/${config.credentials.tenantName}.onmicrosoft.com/${config.policies.policyName}/${config.metadata.version}/${config.metadata.discovery}`,
    clientID: config.credentials.clientID,
    audience: config.credentials.clientID,
    policyName: config.policies.policyName,
    isB2C: config.settings.isB2C,
    validateIssuer: config.settings.validateIssuer,
    loggingLevel: config.settings.loggingLevel,
    passReqToCallback: config.settings.passReqToCallback,
    issuer: `https://${config.metadata.authority}/${config.credentials.tenantName}/${config.metadata.version}`,
    loggingNoPII: config.settings.loggingNoPII,
    scope: config.resource.scope
}

//<ms_docref_init_azuread_lib>
const bearerStrategy = new BearerStrategy(options, (token, done) => {

        if (!token.hasOwnProperty('scp') && !token.hasOwnProperty('roles')) {
            return done(new Error('Unauthorized'), null, "No delegated or app permission claims found");
        }

        // Send user info using the second argument
        done(null, { }, token);
    });

passport.use(bearerStrategy);

module.exports = passport
