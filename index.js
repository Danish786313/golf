const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require('cors');
const flash = require('connect-flash');


const i18n = require('./middleware/i18n.config')
const session = require('./middleware/session')
const apiRestriction = require("./middleware/set.api.restriction")
const catchRouteError = require("./middleware/catch.route.error")
const catchGlobalError = require("./middleware/catch.global.error")
const parser = require("./middleware/parser")
const apiRoute = require("./routes/user")
const adminRoute = require("./routes/admin")


app.use(cors())
app.use(session)
app.use(flash());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use("/public", express.static('public/'));
app.use(express.static('views'));
app.use(apiRestriction)
app.use(i18n)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.use(parser)
app.use("/api", apiRoute)
app.use("/admin", adminRoute)
app.use(catchRouteError)
app.use(catchGlobalError)
app.use((req, res, next) => {
    req.flash('success', "Successfully send otp on mail");
    return res.redirect(req.header('Referer'))
})


module.exports = app