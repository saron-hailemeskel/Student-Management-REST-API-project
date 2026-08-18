const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Student Management REST API",
      version: "1.0.0",
      description: "API documentation for the Student Management System",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/studentRoutes.js"],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;