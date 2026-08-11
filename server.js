const express = require("express");

const app = express();
const PORT = 3000;

// Import routes
const studentRoutes = require("./routes/students");

// Import middleware
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

// 1. Built-in middleware
app.use(express.json());

// 2. Logger middleware
app.use(logger);

// 3. Routes
app.use("/api/students", studentRoutes);

// 4. Error-handling middleware
app.use(errorHandler);

// 5. Start server
app.listen(PORT, () => {
    
    console.log(`Server running on http://localhost:${PORT}`);
});