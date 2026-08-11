const validateStudent = (req, res, next) => {
  
    const { name, email, course, gpa, status } = req.body;

    if (!body || Object.keys(body).length === 0) {
        return res.status(400).json ({
            message :"Request body cannot be empty"});
    }
    if (!name || !email || !course || gpa === undefined || !status) {
        return res.status(400).json({
            message: "Name, email, course, GPA and status are required"
        });
    }

    next();

};


module.exports= validateStudent;