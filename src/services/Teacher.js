const Teacher = require("../model/Teacher");

const createTeacher = async (data) => {
    const teacher = new Teacher(data);
    return await teacher.save();
};

const getAllTeachers = async () => {
    return await Teacher.find().sort({ createdAt: -1 });
};

const updateTeacher = async (id, data) => {
    return await Teacher.findByIdAndUpdate(
        id,
        data,
        { new: true }
    );
};

const deleteTeacher = async (id) => {
    return await Teacher.findByIdAndDelete(id);
};

module.exports = {
    createTeacher,
    getAllTeachers,
    updateTeacher,
    deleteTeacher
};