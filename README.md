# Task Management API
This is a NestJS-based API for managing tasks. The application allows users to create, retrieve, update, and delete tasks, ensuring that each task is associated with a specific authenticated user.

## Features
- **User Authentication:** Ensures that all tasks are tied to a specific user.
- **CRUD Operations on Tasks:**
    - **Create a Task:** Allows an authenticated user to create a task.
    - **Retrieve Tasks:** Users can retrieve all their tasks or a specific task by its ID.
    - **Update a Task:** Users can update the title of a task.
    - **Delete a Task:** Users can delete a task by its ID.
- **User Management:**
    - **Get User with Tasks:** Retrieve user details along with all associated tasks.

## Table of Contents

- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Environment Variables](#environment-variables)
- [Endpoints](#endpoints)
- [Project Structure](#project-structure)
- [License](#license)

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/nestjs-todo-app.git
    cd nestjs-todo-app
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up the environment variables:**

    Create a `.env` file in the root of the project and add the following environment variables:

    ```env
    DATABASE_HOST=localhost
    DATABASE_PORT=5432
    DATABASE_USER=your_username
    DATABASE_PASSWORD=your_password
    DATABASE_NAME=your_database
    ```

## Running the Application

1. **Run the development server:**

    ```bash
    npm run start:dev
    ```

    The application will start on `http://localhost:3000`.

## Environment Variables

The application uses the following environment variables, which should be defined in a `.env` file in the root of the project:

- `DATABASE_HOST`: The hostname of the PostgreSQL database.
- `DATABASE_PORT`: The port number of the PostgreSQL database.
- `DATABASE_USER`: The username to connect to the PostgreSQL database.
- `DATABASE_PASSWORD`: The password to connect to the PostgreSQL database.
- `DATABASE_NAME`: The name of the PostgreSQL database.

## Endpoints

The application exposes the following endpoints for managing todo tasks:

- **GET /api/v1/tasks**: Retrieve all tasks.
- **GET /api/v1/tasks/:id**: Retrieve a task by ID.
- **POST /api/v1/tasks**: Create a new task.
- **PUT /api/v1/tasks/:id**: Update an existing task.
- **DELETE /api/v1/tasks/:id**: Delete a task by ID.