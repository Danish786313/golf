const { Admin } = require("../../models")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const helper = require("../../utils/helper")

exports.getLogin = async (req, res, next) => {
    try {
        const { message, error, formValue} = req.query
        return res.render('admin/auth/login.ejs', {message, error, formValue});
    } catch (err) {
        next(err)
    }
}

exports.login = async (req, res, next) => {
    try {
        const admin = await Admin.findOne({where: {email: req.body.email.trim()}})
        if (!admin) {
            throw new Error("Invalid user name.")
        }

        let result = await bcrypt.compare(req.body.password, admin.password)
        if (result) {
            let token = jwt.sign({id: admin.id, email: admin.email}, process.env.SECRET, { expiresIn: "365d" });
            await Admin.update({ token: token }, { where: { id: admin.id } })
            res.cookie('dd-token', token, { maxAge: 1000 * 60 * 60 * 24 * 365 })
            return res.redirect('/admin/dashboard')
        } else {
            throw new Error("Invalid password.")
        }
    } catch (err) {
        next(err)
    }
}