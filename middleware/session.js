const session = require('express-session');
module.exports = session({
    secret: 'flash',
    saveUninitialized: true,
    resave: true,
    cookie: {
        maxAge: 60000
    }
})