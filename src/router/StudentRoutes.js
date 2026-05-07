const router = require("express").Router();

const studentController = require("../controller/Student.controller");

router.post("/create", studentController.createStudent);

router.get("/getAll", studentController.getAllStudents);

router.get("/paid", studentController.getPaidStudents);

router.get("/unpaid", studentController.getUnpaidStudents);

router.put("/update/:id", studentController.updateStudent);

router.delete("/delete/:id", studentController.deleteStudent);

module.exports = router;