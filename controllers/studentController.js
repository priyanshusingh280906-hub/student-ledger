const Student = require("../models/Student");

exports.createStudent = async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.json(student);
};

exports.getStudents = async (req, res) => {
  const students = await Student.find();
  res.json(students);
};

exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).send("Not found");
    res.json(student);
  } catch {
    res.status(400).send("Invalid ID");
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!student) return res.status(404).send("Not found");

    res.json(student);
  } catch {
    res.status(400).send("Invalid ID");
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);

    if (!student) return res.status(404).send("Not found");

    res.send("Deleted");
  } catch {
    res.status(400).send("Invalid ID");
  }
};