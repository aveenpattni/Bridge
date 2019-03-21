const Token = require('../Utilities/token');
const secret = require('../Utilities/secret');

// This handler will check for, and validate, a token on the authorization header
module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    // If no token is sent in request:
    if (!authorization) {
        res.status(401).json({
            message: 'Log in to access this page'
        })
    }
    // Validate the token, and if valid, save to locals
    res.locals.user = Token.verify(authorization, () => {
        res.status(401).json({
            message: 'Your session has expired. Log in to access this page.'
        });
    });
    // If token is authorized, move on with request.
    next();
}