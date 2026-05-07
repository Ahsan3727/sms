const Student = require("../model/Student");

const computePaidStatus = (fees) => {
    if (!Array.isArray(fees) || fees.length === 0) {
        return false;
    }

    const monthNames = ["January","February","March","April","May","June",
                        "July","August","September","October","November","December"];
    const currentMonthName = monthNames[new Date().getMonth()];

    return fees.some(fee => 
        fee.month === currentMonthName && fee.status === 'paid'
    );
};

const createStudent = async (data) => {
    const student = new Student({
        ...data,  
        paid: computePaidStatus(data.fees)
    });
    return await student.save();
};

const getAllStudents = async () => {
    return await Student.find().sort({ createdAt: -1 });
};

const getPaidStudents = async () => {
    return await Student.find({ paid: true }).sort({ createdAt: -1 });
};

const getUnpaidStudents = async () => {
    return await Student.find({ paid: false }).sort({ createdAt: -1 });
};

const updateStudent = async (id, data) => {
    const updatedData = { ...data };

    if (data.fees) {
        updatedData.paid = computePaidStatus(data.fees);
    }

    return await Student.findByIdAndUpdate(
        id,
        updatedData,
        { new: true }
    );
};

const deleteStudent = async (id) => {
    return await Student.findByIdAndDelete(id);
};

module.exports = {
    createStudent,
    getAllStudents,
    getPaidStudents,
    getUnpaidStudents,
    updateStudent,
    deleteStudent
};