const students = require("../data/students");
const { notFound } = require("../middleware/errorHandler");
const validateStudent = require("../middleware/validateStudent");

//get all the students 

const getAllStudents = (req,res) =>{

    res.status(200).json(students);

}

//get students by ID

const getStudentById = (req,res) => {
    const id =Number(req.params.id);
    const student = students.find (student=> student.id===id);
    if (!student) {
        return notFound(res, "Student not found");
    }
    res. status(200).json(student);
}

//creating 

const createStudent = (req, res) => {
    const { name, email, course, gpa, status } = req.body;

    const newStudent = {
        id: students.length > 0 ? students[students.length - 1].id + 1 : 1,
        name,
        email,
        course,
        gpa,
        status
    };

    students.push(newStudent);

    res.status(201).json({
        message: "Student created successfully",
        student: newStudent
    });
};

// updating

const updateStudentById = (req,res) =>{

    const id =Number(req.params.id);
    const index = students.findIndex(student => student.id=== id);
    if (index === -1) {
        return notFound(res, "Student not found");
    }
    
    students[index] = {
        id,
        ...req.body
    }
    //object.assign method can also be using along with find () method
    res.status(200).json(student[index]);
}

// deleting

const deleteStudentById =(req,res) => {
    const id = Number(req.params.id);
    const index = students.findIndex(student => student.id=== id);
    if (index === -1) {
        return notFound(res, "Student not found");
    }
    students.splice(index,1);

    res.status( 200).json({
        message: "student deleted succsessfully"
    });

}
//search student by name

const searchStudentByName = (req,res) => {
    const name = req.query.name;
    const student = students.filter(student => student.name.toLowercase()
    .includes(name.toLowercase()));
 // error handling
    res.status(200).json(student);
}
//search student by email

const searchStudentByEmail =(req,res) =>{
    const email= req.query.email;
    const student = students.filter(student=> student.email.toLowercase().
    includes(email.toLowercase()));
    //errorhandling
    res.status(200).json(student);
}
//filter students by status

const filterStudentByStatus =(req,res)=>{
    const status = req.query.status;
    const student = students.filter(student => student.status.toLowerCase()
    .includes(status.toLowerCase()));
    //error handling
    res.status(200).json(student);
}
//filter student by course

const filterStudentBycourse =(req,res)=>{
    const course = req.query.course;
    const student = students.filter(student => student.course.toLowerCase()
    .includes(course.toLowerCase()));
    //error handling
    res.status(200).json(student);
}
//filter by GPA

const filterStudentByGpa =(req,res)=>{

    const gpa =Number(req.query.gpa);
    const student = students.filter(student => student.gpa===gpa);
    //error handling
    res.status(200).json(student);

}
//number of total student
const totalStudents= (req,res)=> {

    const totalStudents = students.length;
    res.status(200).json(
        { totalStudents}
    );

}


// total number of student in each courses

const getStudentCountByCourse = (req, res) => {
    const countByCourse = students.reduce((counts, student) => {

        if (counts[student.course]) {
            counts[student.course]++;
        } else {
            counts[student.course] = 1;
        }

        return counts;
    }, {});

    res.status(200).json({
        countByCourse
    });
};

// average gpa

const averageGpa =(req,res)=>{
    const totalStudents = students.length;

    const totalGPA = students.reduce((sum, student) => {
        return sum + student.gpa;
    }, 0);
    const averageGPA = totalGPA  /  totalStudents;

    res.status(200).json({
        averageGPA: Number(averageGPA.toFixed(2))
    });
}


module.exports = {
 getAllStudents,
 getStudentById,
 createStudent,
 updateStudentById,
 deleteStudentById,
 searchStudentByName,
 searchStudentByEmail,
 filterStudentByStatus,
 filterStudentBycourse,
 filterStudentByGpa,
 totalStudents,
 getStudentCountByCourse,
 averageGpa
}