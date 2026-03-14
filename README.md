# Library Management REST API

## Description
This project is a simple RESTful API for a Library Management System built using Node.js and Express.js. It supports CRUD operations for managing books.

## Technologies Used
- Node.js
- Express.js
- Postman
- VS Code

## Base URL
http://localhost:3000

## Endpoints

### 1. GET /books
Returns all books.

Example:
GET http://localhost:3000/books

### 2. GET /books/:id
Returns a single book by ID.

Example:
GET http://localhost:3000/books/1

### 3. POST /books
Adds a new book.

Example:
POST http://localhost:3000/books

Request Body:
```json
{
  "title": "Rich Dad Poor Dad",
  "author": "Robert Kiyosaki",
  "genre": "Finance",
  "available": true
}