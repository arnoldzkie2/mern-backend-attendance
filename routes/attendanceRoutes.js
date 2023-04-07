const express = require("express")
const {
    getAttendance,
    getSingleAttendance,
    createAttendance,
    deleteAttendance,
    updateAttendance
} = require("../controllers/attendanceController")
const router = express.Router()

// get attendance
router.get("/", getAttendance)

// get single attendance
router.get("/:id", getSingleAttendance)

// create a new attendance
router.post("/", createAttendance)

// delete attendance
router.delete("/:d", deleteAttendance)

// update attendance
router.patch("/:d", updateAttendance)

module.exports = router