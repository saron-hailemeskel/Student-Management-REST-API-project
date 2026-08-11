const errorHandler = (err, req, res, next) => {
    console.error(err);

    res.status(500).json({
        message: "Internal server error"
    });
};

const notFound = (res, message = "Student not found") => {
    return res.status(404).json({
        message
    });
};

module.exports = {
    errorHandler,
    notFound
};