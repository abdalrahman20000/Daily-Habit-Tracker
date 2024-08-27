const express = require("express");
const router = express.Router();
const user_controller = require("../controllers/user_controllers");
const habit_controller = require("../controllers/habits_controllers");


router.post("/users",user_controller.sign_up);
router.post("/habits",habit_controller.add_habit);
router.get("/habits",habit_controller.get_habit);
router.patch("/habits",habit_controller.delete_habit);


module.exports = router;