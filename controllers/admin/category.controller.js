const { Category } = require("../../models")
const utils = require("../../utils/helper")
const { Op } = require("sequelize");

exports.getCategories = async (req, res) => {
    try {
        const { page, limit, search_text } = req.query
        console.log(req.query)
        let data = await Category.findAndCountAll()
        let response = utils.getPagingData(res, data, page+1, limit)
        res.render("admin/category/get-category", {
            totalItems: response.totalItems,
            items: response.items,
            totalPages: response.totalPages,
            currentPage: response.currentPage,
            search_text: search_text
        })
    } catch (err) {
        next(err)
    }
}
exports.getCategories = async (req, res, next) => {
    try {
        const { page, limit, search_text } = req.query
        console.log(req.query)
        if (search_text) {
            req.query.where = {name: { [Op.like]: "%" + search_text + "%" } } 
        }
        let data = await Category.findAndCountAll(req.query)
        let response = utils.getPagingData(res, data, page+1, limit)
        res.render("admin/category/get-category", {
            totalItems: response.totalItems,
            items: response.items,
            totalPages: response.totalPages,
            currentPage: response.currentPage,
            search_text: search_text
        })
    } catch (err) {
        next(err)
    }
}