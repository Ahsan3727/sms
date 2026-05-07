const router = require("express").Router();

const teacherController = require("../controller/Teacher.controller");

router.post("/create", teacherController.createTeacher);

router.get("/getAll", teacherController.getAllTeachers);

router.put("/update/:id", teacherController.updateTeacher);

router.delete("/delete/:id", teacherController.deleteTeacher);

module.exports = router;