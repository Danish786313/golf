const i18n = require('i18n')
const { join } = require('path')
const { Admin } = require("../models")

i18n.configure({
    locales: ['EN', 'FR'],
    directory: join(__dirname, '../utils/languages'),
    register: global,
    defaultLocale: 'EN',
})

module.exports = async (req, res, next) => {
    i18n.init(res); 

    if (req.query.lang_key) {
        next(res.setLocale(req.query.lang_key))
    }

    if (req.cookies) {
        if (Object.keys(cookie).includes("dd-token")) {
            let admin = await Admin.findOne({where: {token: cookie["dd-token"]}})
            next(res.setLocale(admin.lang_key))
        }
    }
    
    next()
}