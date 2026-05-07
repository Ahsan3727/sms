const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./src/config/Database");
const studentRoutes = require("./src/router/StudentRoutes");
const teacherRoutes = require("./src/router/TeacherRoutes");

dotenv.config();

const app = express();

// CORS configuration
app.use(cors({
origin: '*',   // allows all origins
credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/students", studentRoutes);
app.use("/api/teachers", teacherRoutes);

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "SMS Backend is running"
    });
});

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).json({
        success: false,
        message: err.message || "Internal server error"
    });
});

const PORT = process.env.PORT || 5000;

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Failed to start server:", error.message);
        process.exit(1);
    });
