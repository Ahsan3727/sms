const studentService = require("../services/Student");

const createStudent = async (req, res) => {
    try {

        const student = await studentService.createStudent(req.body);

        res.status(201).json({
            success: true,
            message: "Student created successfully",
            data: student
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }
};

const getAllStudents = async (req, res) => {
    try {

        const students = await studentService.getAllStudents();

        res.status(200).json({
            success: true,
            total: students.length,
            data: students
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }
};

const getPaidStudents = async (req, res) => {
    try {

        const students = await studentService.getPaidStudents();

        res.status(200).json({
            success: true,
            total: students.length,
            data: students
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }
};

const getUnpaidStudents = async (req, res) => {
    try {

        const students = await studentService.getUnpaidStudents();

        res.status(200).json({
            success: true,
            total: students.length,
            data: students
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }
};

const updateStudent = async (req, res) => {
    try {

        const student = await studentService.updateStudent(
            req.params.id,
            req.body
        );

        res.status(200).json({
            success: true,
            message: "Student updated successfully",
            data: student
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }
};

const deleteStudent = async (req, res) => {
    try {

        await studentService.deleteStudent(req.params.id);

        res.status(200).json({
            success: true,
            message: "Student deleted successfully"
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }
};

module.exports = {
    createStudent,
    getAllStudents,
    getPaidStudents,
    getUnpaidStudents,
    updateStudent,
    deleteStudent
};