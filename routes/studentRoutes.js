const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentControllers");
const validateStudent = require("../middleware/validateStudent");

router.get("/search/name", studentController.searchStudentByName);
router.get("/search/email", studentController.searchStudentByEmail);
router.get("/filter/status", studentController.filterStudentByStatus);
router.get("/filter/course", studentController.filterStudentBycourse);
router.get("/filter/gpa", studentController.filterStudentByGpa);
router.get("/avg",studentController.averageGpa);
router.get("/total_students", studentController.totalStudents);
router.get("/students_in_each_course", studentController.getStudentCountByCourse);
//CRUD
router.post("/", validateStudent , studentController.createStudent);
router.get("/",studentController.getAllStudents);
router.get("/:id", studentController.getStudentById);
router.put("/:id", validateStudent , studentController.updateStudentById);
router.delete("/:id", studentController.deleteStudentById);

module.exports=router;