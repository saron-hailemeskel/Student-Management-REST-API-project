const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentControllers");
const validateStudent = require("../middleware/validateStudent");

/**
 * @swagger
 * tags:
 *   name: Students
 *   description: Student management endpoints
 */

/**
 * @swagger
 * /api/students:
 *   post:
 *     summary: Create a new student
 *     tags: [Students]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - course
 *               - gpa
 *             properties:
 *               name:
 *                 type: string
 *                 example: Saron Hailemeskel
 *               email:
 *                 type: string
 *                 example: saron@example.com
 *               course:
 *                 type: string
 *                 example: Computer Science
 *               gpa:
 *                 type: number
 *                 example: 3.8
 *     responses:
 *       201:
 *         description: Student created successfully
 *       400:
 *         description: Invalid student data
 */
router.post("/", validateStudent, studentController.createStudent);

/**
 * @swagger
 * /api/students:
 *   get:
 *     summary: Get all students
 *     tags: [Students]
 *     responses:
 *       200:
 *         description: List of all students
 */
router.get("/", studentController.getAllStudents);

/**
 * @swagger
 * /api/students/{id}:
 *   get:
 *     summary: Get a student by ID
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Student found
 *       404:
 *         description: Student not found
 */
router.get("/:id", studentController.getStudentById);

/**
 * @swagger
 * /api/students/{id}:
 *   put:
 *     summary: Update a student
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Saron Hailemeskel
 *               email:
 *                 type: string
 *                 example: saron@example.com
 *               course:
 *                 type: string
 *                 example: Computer Science
 *               gpa:
 *                 type: number
 *                 example: 3.9
 *     responses:
 *       200:
 *         description: Student updated successfully
 *       400:
 *         description: Invalid student data
 *       404:
 *         description: Student not found
 */
router.put("/:id", validateStudent, studentController.updateStudentById);

/**
 * @swagger
 * /api/students/{id}:
 *   delete:
 *     summary: Delete a student
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Student deleted successfully
 *       404:
 *         description: Student not found
 */
router.delete("/:id", studentController.deleteStudentById);


// SEARCH
/**
 * @swagger
 * /api/students/search/name:
 *   get:
 *     summary: Search student by name
 *     tags: [Students]
 *     parameters:
 *       - in: query
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         example: Saron
 *     responses:
 *       200:
 *         description: Successfully searched
 */

router.get("/search/name", studentController.searchStudentByName); 

/**
 * @swagger
 * /api/students/search/name:
 *   get:
 *     summary: Search student by email
 *     tags: [Students]
 *     parameters:
 *       - in: query
 *         name: email
 *         required: true
 *         schema:
 *           type: string
 *         example: saron@example.com
 *     responses:
 *       200:
 *         description: Successfully searched
 */



router.get("/search/email", studentController.searchStudentByEmail);
// Filters

/**
 * @swagger
 * /api/students/filter/status:
 *   get:
 *     summary: Filter students by status
 *     tags: [Students]
 *     parameters:
 *       - in: query
 *         name: status
 *         required: true
 *         schema:
 *           type: string
 *         example: active
 *     responses:
 *       200:
 *         description: Successfully filtered students by status
 */
router.get("/filter/status", studentController.filterStudentByStatus);


/**
 * @swagger
 * /api/students/filter/course:
 *   get:
 *     summary: Filter students by course
 *     tags: [Students]
 *     parameters:
 *       - in: query
 *         name: course
 *         required: true
 *         schema:
 *           type: string
 *         example: Computer Science
 *     responses:
 *       200:
 *         description: Successfully filtered students by course
 */
router.get("/filter/course", studentController.filterStudentBycourse);


/**
 * @swagger
 * /api/students/filter/gpa:
 *   get:
 *     summary: Filter students by GPA
 *     tags: [Students]
 *     parameters:
 *       - in: query
 *         name: gpa
 *         required: true
 *         schema:
 *           type: number
 *         example: 3.5
 *     responses:
 *       200:
 *         description: Successfully filtered students by GPA
 */
router.get("/filter/gpa", studentController.filterStudentByGpa);


// Statistics

/**
 * @swagger
 * /api/students/avg:
 *   get:
 *     summary: Get the average GPA of students
 *     tags: [Students]
 *     responses:
 *       200:
 *         description: Successfully retrieved the average GPA
 */
router.get("/avg", studentController.averageGpa);


/**
 * @swagger
 * /api/students/total_students:
 *   get:
 *     summary: Get the total number of students
 *     tags: [Students]
 *     responses:
 *       200:
 *         description: Successfully retrieved the total number of students
 */
router.get("/total_students", studentController.totalStudents);


/**
 * @swagger
 * /api/students/students_in_each_course:
 *   get:
 *     summary: Get the number of students in each course
 *     tags: [Students]
 *     responses:
 *       200:
 *         description: Successfully retrieved student count for each course
 */
router.get(
    "/students_in_each_course",
    studentController.getStudentCountByCourse
);

module.exports = router;