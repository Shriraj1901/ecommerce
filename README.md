🚀 MERN Stack E-Commerce Project
📌 Milestone 1: MERN Stack Demonstration

In this milestone, we explored the fundamentals and functionality of the MERN stack:

M - MongoDB: Serves as the database for storing application data.

E - Express.js: Acts as the API layer, facilitating communication between the client and server.

R - React.js: Powers the client-side application with a dynamic user interface.

N - Node.js: Provides the runtime environment to run Express on the server.

🔑 Key Features Implemented

Authentication

Login: Allows users to sign in to their accounts.
Logout: Enables users to securely log out.
Signup: Provides a registration interface for new users.
Product Page

Displays all available products with detailed information.
Orders Page

Showcases the orders placed by each user.
Payment Gateway

Integrated a secure payment system for processing transactions.
📚 Milestone 2: Project Overview

This milestone focused on setting up the development environment for the backend project and designing the basic UI for the login page.

💻 Frontend Setup

React Setup: Initialized using Vite for a faster development environment.
Tailwind CSS Integration: Used for efficient and responsive styling.
🤟 Backend Setup

Project Initialization: Configured with Express.js, Mongoose, CORS, and Nodemon for seamless backend development.
🗒️ Project Structure

project-root/ ├── backend/ │ ├── models/ │ ├── routes/ │ ├── controllers/ │ ├── server.js │ └── .env ├── frontend/ │ ├── src/ │ ├── public/ │ ├── package.json │ └── tailwind.config.js ├── package.json └── README.md

▶️ How to Run the Project

Frontend: cd frontend → npm install → npm run dev
Backend: cd backend → npm install → nodemon server.js
📚 Milestone 3: Error Handling Integration

Focused on improving backend stability with:

Global Error Handling Middleware for consistent error responses.
Optimized Middleware Loading for smoother request handling.
📚 Milestone 4: User Model, Controller, and File Uploads with Multer

In this milestone, we focused on building the User Model, setting up controllers to manage user data, and enabling file uploads with Multer.

🤟 Backend Enhancements

User Model: Defined the structure for user data using Mongoose.
User Controller: Created logic for user operations such as registration and retrieval.
Multer Integration: Configured Multer for handling file uploads like profile pictures.
📚 Milestone 5: Frontend Sign-Up Page and Form Validation

In this milestone, we focused on building a responsive and user-friendly Sign-Up page and implementing form validation.

📝 Key Implementations

Sign-Up Page: Developed a clean UI for user registration.
Form Validation: Ensured user inputs like email and password are validated before submission.
📚 Milestone 6: Backend Signup Endpoint and Password Encryption

In this milestone, we created a secure backend endpoint for user signup, focusing on encrypting passwords and storing user data safely in the database.

🔒 Backend Enhancements

Password Encryption:

Used bcrypt to hash user passwords before saving them.
Stored the hashed password instead of plain text for better security.
Secure Data Storage:

Collected and stored complete user data (name, email, etc.) in the database with encrypted passwords.
📝 Key Implementations

Enhanced Security: Protected user data against breaches and complied with security standards.
Improved Privacy: Prevented password visibility and unauthorized access.
📚 Milestone 7: Login Endpoint and JWT Authentication

In this milestone, we implemented a secure login mechanism with JSON Web Tokens (JWT) for authentication and session management.

🔐 Authentication Enhancements

Login Endpoint: Created a backend route for user login verification.
JWT Token Generation: Implemented token-based authentication for secure user sessions.
Token Validation Middleware: Added middleware to protect routes requiring authentication.
🌟 Key Features

Secure Login Process: Validate user credentials against stored encrypted passwords.
Token-Based Authentication: Generate and manage JWT tokens for persistent user sessions.
Route Protection: Ensure only authenticated users can access protected routes.
📚 Milestone 8: Home Page Development and Product Display

In this milestone, we focused on creating a dynamic home page and implementing product display functionality.

🏠 Home Page Features

Responsive Design: Created a user-friendly, responsive home page layout.
Product Showcase: Implemented a grid-based display of available products.
Product Cards: Designed individual product cards with key information.
🔍 Product Display Enhancements

Product Fetching: Integrated backend API to retrieve product data.
Dynamic Rendering: Dynamically display products from the database.
Basic Filtering: Added initial product filtering capabilities.
📚 Milestone 9: Create Product Page and Form Enhancements

In this milestone, we focused on developing the Create Product Page, ensuring a user-friendly interface for adding new products.

📚 Key Features Implemented

Product Form: Developed a structured form for adding new products.
Category Selection: Dropdown for selecting product categories.
File Uploads: Image upload feature using Multer.
Real-time Input Validation: Ensured correct data input before submission.
🌟 Enhancements

Improved form design and layout.
Added validation for price and stock fields.
Fixed UI margins for better responsiveness.
📚 Milestone 10: Create Product Endpoint and Multer Integration

In this milestone, we focused on implementing the backend logic for adding new products, including integrating Multer for handling image uploads.

🔧 Backend Enhancements

Product Endpoint: Created an endpoint for adding new products to the database.
Multer Integration: Set up Multer to handle file uploads for product images.
File Storage: Configured Multer to store images under the uploads directory.
🌟 Key Features Implemented

Product Addition: Enabled functionality for adding new products with relevant details such as name, description, price, and stock.
Image Upload: Allowed product images to be uploaded and stored securely.
Image Path Handling: Ensured correct file paths for images after upload.
📚 Milestone 11: Dynamic Product Addition

In this milestone, we implemented dynamic product addition functionality to enhance the user experience.

🌟 Key Features Implemented

Real-time Product Updates: Products are dynamically added to the display without page refresh.
Interactive UI: Implemented smooth transitions for newly added products.
Validation Feedback: Added instant feedback for successful product creation.
📚 Milestone 12: User Email Integration

In this milestone, we focused on user email functionality and authentication improvements.

🔑 Key Features Implemented

User Email Fetching: Implemented functionality to retrieve user email information.
Static Email Configuration: Added ability to set and maintain static user email for testing and development.
Email Validation: Enhanced email handling and validation throughout the application.
<<<<<<< HEAD 📍 File Storage Structure

The product images will be stored under the uploads directory to ensure organization and easy retrieval.
📚 Milestone 13: Product Edit Feature Implementation

In this milestone, we focused on implementing the Edit Feature for the My Products Page, enabling users to modify existing product information.

🌟 Key Features Implemented

Edit Form Development: Created a form with pre-filled product details for easy editing.
Data Handling: Implemented logic to handle form submissions and updates.
API Integration: Developed backend API endpoints for updating product information.
Database Updates: Integrated functionality to modify product details in the database.
📍 File Storage Structure

📚 Milestone 14: Delete Product Button Implementation

In this milestone, we implemented the Delete Product functionality to allow users to remove products from their listings.

🛠️ Key Features Implemented

Delete Button UI: Added a delete button to each product card.
API Endpoint: Created a backend route for handling product deletion requests.
Database Integration: Ensured products are removed from the database upon deletion.
Frontend Handling: Implemented confirmation prompts before deletion and real-time UI updates.
🔍 Enhancements

Improved UI responsiveness when deleting products.
Implemented error handling for failed deletions.
Optimized product reloading after deletion.
