const express = require('express');
const router = express.Router();
const controller = require("../controllers/admin/index.js")

/* ========================== Auth =============================== */
router.get("/login", controller.auth.getLogin)
router.post("/login", controller.auth.login)

/* ========================== Dashboard ========================== */
router.get("/dashboard", controller.dashboard.dashboard)

/* ========================== Tournament ========================= */
router.get("/create-tournament", controller.tournament.getCreateTournament)
router.post("/create-tournament", controller.tournament.createTournament)

router.get("/tournament", controller.tournament.getTournament)

router.get("/category", controller.category.getCategories)
router.get("/create-category", controller.category.getCategories)

router.post("/category", controller.category.getCategories)



module.exports = router
