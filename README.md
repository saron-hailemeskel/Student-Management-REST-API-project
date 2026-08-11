# Student-Management-REST-API-project


A RESTful Student Management API built with **Node.js** and **Express.js**. This project demonstrates backend fundamentals including REST API design, routing, controllers, middleware, CRUD operations, query parameters, error handling, and data validation.

## 🚀 Features

* Get all students
* Get a student by ID
* Create a new student
* Update a student
* Delete a student
* Search students by name
* Search students by email
* Filter students by status
* Filter students by course
* Filter students by GPA
* Get total number of students
* Get student count by course
* Calculate average GPA
* Request logging
* Student data validation
* Error handling

> This project uses an in-memory JavaScript array instead of a database.

## 📁 Project Structure

```text
student-management-api/
│
├── package.json
├── package-lock.json
├── server.js
│
├── routes/
│   └── students.js
│
├── controllers/
│   └── studentController.js
│
├── middleware/
│   ├── logger.js
│   ├── validateStudent.js
│   └── errorHandler.js
│
└── data/
    └── students.js
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Navigate into the project

```bash
cd student-management-api
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the server

```bash
node server.js
```

The API will run at:

```text
http://localhost:3000
```

## 🔗 API Endpoints

The API uses the following base URL:

```text
http://localhost:3000/api/students
```

### Students

| Method | Endpoint            | Description       |
| ------ | ------------------- | ----------------- |
| GET    | `/api/students`     | Get all students  |
| GET    | `/api/students/:id` | Get student by ID |
| POST   | `/api/students`     | Create a student  |
| PUT    | `/api/students/:id` | Update a student  |
| DELETE | `/api/students/:id` | Delete a student  |

### Search

| Method | Endpoint                                 | Description     |
| ------ | ---------------------------------------- | --------------- |
| GET    | `/api/students/search/name?name=Saron`   | Search by name  |
| GET    | `/api/students/search/email?email=gmail` | Search by email |

### Filters

| Method | Endpoint                                              | Description      |
| ------ | ----------------------------------------------------- | ---------------- |
| GET    | `/api/students/filter/status?status=active`           | Filter by status |
| GET    | `/api/students/filter/course?course=Computer Science` | Filter by course |
| GET    | `/api/students/filter/gpa?gpa=3.8`                    | Filter by GPA    |

### Statistics

| Method | Endpoint                                | Description                  |
| ------ | --------------------------------------- | ---------------------------- |
| GET    | `/api/students/statistics/total`        | Get total number of students |
| GET    | `/api/students/statistics/course-count` | Get student count by course  |
| GET    | `/api/students/statistics/average-gpa`  | Get average GPA              |


```
```
## 🧩 Middleware

### Logger

Logs incoming HTTP requests, including the request method and URL.

### Student Validation

Validates required student information before creating or updating a student.

### Error Handler

Provides centralized handling for unexpected server errors and resource-not-found responses.

## 🧠 Concepts Practiced

This project was built to strengthen my understanding of:

* RESTful API architecture
* Express.js
* HTTP methods and status codes
* Routing
* Controllers
* Middleware
* `req.params`
* `req.query`
* `req.body`
* CRUD operations
* JavaScript array methods such as `find()`, `findIndex()`, `filter()`, `reduce()`, and `splice()`
* Input validation
* Error handling
* API testing with Postman
* Git and GitHub

## 📝 Notes

This project intentionally does **not** use a database. Student records are stored in a JavaScript array, so changes made while the server is running are not persistent after the server restarts.

## 👩🏽‍💻 Author

**Saron Hailemeskel**

Computer Science Student | Aspiring Software Developer

GitHub: [@saronhailemeskel](https://github.com/saron-hailemeskel)
