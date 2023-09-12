exports.dashboard = async (req, res, next) => {
    try {
        const error = req.flash('error')
        const message = req.flash('success')
        const formValue = req.flash('formValue')[0];
        return res.render('admin/dashboard/dashboard.ejs', {message, error, formValue});
    } catch (err) {
        next(err)
    }
}