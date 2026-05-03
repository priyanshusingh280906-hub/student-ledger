const router = require("express").Router();
const auth = require("../middleware/authMiddleware");

const {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");

/**
 * @swagger
 * tags:
 *   name: Students
 *   description: Student management (requires JWT)
 */

/**
 * @swagger
 * /students:
 *   post:
 *     summary: Add a new student
 *     tags: [Students]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, age]
 *             properties:
 *               name:
 *                 type: string
 *                 example: Alice
 *               age:
 *                 type: number
 *                 example: 20
 *     responses:
 *       200:
 *         description: Student created
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.post("/", auth, createStudent);

/**
 * @swagger
 * /students:
 *   get:
 *     summary: Get all students
 *     tags: [Students]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of students
 *       401:
 *         description: Unauthorized
 */
router.get("/", auth, getStudents);

/**
 * @swagger
 * /students/{id}:
 *   get:
 *     summary: Get a student by ID
 *     tags: [Students]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 664abc123def456ghi789
 *     responses:
 *       200:
 *         description: Student data
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Student not found
 *       400:
 *         description: Invalid ID
 */
router.get("/:id", auth, getStudentById);

/**
 * @swagger
 * /students/{id}:
 *   patch:
 *     summary: Update a student
 *     tags: [Students]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               age:
 *                 type: number
 *     responses:
 *       200:
 *         description: Updated student
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Student not found
 *       400:
 *         description: Invalid ID
 */
router.patch("/:id", auth, updateStudent);

/**
 * @swagger
 * /students/{id}:
 *   delete:
 *     summary: Delete a student
 *     tags: [Students]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Student deleted
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Student not found
 *       400:
 *         description: Invalid ID
 */
router.delete("/:id", auth, deleteStudent);

module.exports = router;