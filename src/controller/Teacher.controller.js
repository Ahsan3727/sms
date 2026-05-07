const teacherService = require("../services/Teacher");

const createTeacher = async (req, res) => {
    try {

        const teacher = await teacherService.createTeacher(req.body);

        res.status(201).json({
            success: true,
            message: "Teacher created successfully",
            data: teacher
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }
};

const getAllTeachers = async (req, res) => {
    try {

        const teachers = await teacherService.getAllTeachers();

        res.status(200).json({
            success: true,
            total: teachers.length,
            data: teachers
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }
};

const updateTeacher = async (req, res) => {
    try {

        const teacher = await teacherService.updateTeacher(
            req.params.id,
            req.body
        );

        res.status(200).json({
            success: true,
            message: "Teacher updated successfully",
            data: teacher
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }
};

const deleteTeacher = async (req, res) => {
    try {

        await teacherService.deleteTeacher(req.params.id);

        res.status(200).json({
            success: true,
            message: "Teacher deleted successfully"
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }
};

module.exports = {
    createTeacher,
    getAllTeachers,
    updateTeacher,
    deleteTeacher
};