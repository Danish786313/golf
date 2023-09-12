module.exports = {
    adminError(message, firebaseToken) {
        console.log(err)
        req.flash('formValue', req.body);
        req.flash('error', res.locals.__(err.message));
        return res.redirect(req.header('Referer'))
    },
    getPagingData(res, data, page, limit) {
        const { count: totalItems, rows: items } = data;
        const currentPage = page ? +page : 0;
        const totalPages = Math.ceil(totalItems / limit);
        return  { totalItems, items, totalPages, currentPage };
    },
}