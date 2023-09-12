const { Tournament, Course } = require("../../models")
const utils = require("../../utils/helper")
const { Op } = require("sequelize");

exports.getCreateTournament = async (req, res, next) => {
    try {
        const { message, error, formValue } = req.query
        let courses = await Course.findAll()
        return res.render('admin/tournament/create-tournament.ejs', {message, error, formValue, courses: courses});
    } catch (err) {
        next(err)
    }
}

exports.createTournament = async (req, res, next) => {
    try {
        req.body.tournament_type = "PUBLIC"
        let data = Tournament.create(req.body)
        let success = "Successfully created."
        next('last')
    } catch (err) {
        next(err)
    }
}

exports.getTournament = async (req, res, next) => {
    try {
        const { page, limit, order, search_text, course_id, tournament_type, betting_type } = req.query
        let options = {
            include: [{model: Course}],
            offset: page * limit,
            limit: limit,
            order: [['id', 'DESC']],
            where: {}
        } 
        if (search_text) {
            options.where.name = { [Op.like]: "%" + search_text + "%" } ;
        }
        if (betting_type) {
            options.where.betting_type = betting_type
        }
        if (tournament_type) {
            options.where.tournament_type = tournament_type
        }
        if (course_id) {
            options.include[0]["where"] = { id: course_id };
        }
        if (course_id) {
            options.include[0]["where"] = { id: course_id };
        }
        let data = await Tournament.findAndCountAll(options)
        let response = utils.getPagingData(res, data, page+1, limit)
        let courses = await Course.findAll()
        // return res.send(response)
        return res.render('admin/tournament/tournament.ejs', {
            totalItems: response.totalItems,
            items: response.items,
            totalPages: response.totalPages,
            currentPage: response.currentPage,
            courses: courses,
            course_id: course_id,
            tournament_type: tournament_type,
            betting_type: betting_type,
            search_text: search_text
        })
    } catch (err) {
        next(err)
    }
}