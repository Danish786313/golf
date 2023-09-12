module.exports = async (error, req, res, next) => {
    console.log(error)
    // if (error instanceof Error) {
    //     return res.send("Danish khan") //404
    // }
    // if (error instanceof ReferenceError) {
    //     return res.send("Danish khan") //404
    // }
    // if (error instanceof TypeError) {
    //     return res.send("Danish khan") //404
    // }
    // if (error instanceof SyntaxError) {
    //     return res.send("Danish khan") //404
    // }
    // if (error instanceof URIError) {
    //     return res.send("Danish khan") //404
    // }
    // if (error instanceof EvalError) {
    //     return res.send("Danish khan") //404
    // }
    // res.status(error.status || 500)
    req.flash('formValue', req.body);
    req.flash('success', success);
    req.flash('error', res.locals.__(error.message));
    return res.redirect(req.header('Referer'))
}
