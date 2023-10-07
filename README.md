# Flipkart-Clone

This project is a clone of Flipkart built using the MERN stack (MongoDB, Express.js, React, Node.js). It mimics the core functionality and design of the Flipkart website.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
  - [Server](#server)
  - [Client](#client)
- [Usage](#usage)

## Features

- User authentication and authorization
- Product browsing and search functionality
- Cart management
- Order placement and history
- Admin dashboard for product and user management

## Technologies Used

- MongoDB: Database
- Express.js: Server framework
- React: Frontend framework
- Node.js: Backend framework
- Redux: State management
- Bootstrap: Frontend styling
- JWT: Authentication
- Axios: HTTP requests

## Installation

### Server

1.  Clone the repository:

   ```bash
   git clone https://github.com/PavanaSakethaRam/Flipkart-Clone/
   ```
2.  Navigate to the server directory:
  ```bash
  cd server
  ```
3.  Install dependencies:
   ```bash
   npm install
   ```
4.  Set up environment variables:
    Create a .env file in the server directory and define the following variables:
    ```bash
    DB_USERNAME=<mongo_db_username>
    DB_PASSWORD=<mongo_db_password>
    ```
5.  Run the server
    ```bash
    npm start
    ```
The server will start at the port 8000.

### Client

1.  Navigate to the client directory:
  ```bash
  cd client
  ```
2.  Install dependencies:
   ```bash
   npm install
   ```
3.  Run the app
    ```bash
    npm start
    ```
The client application will start and can be accessed in the browser at http://localhost:3000.

## Usage

* Access the client application through a web browser.
* Create an account or login to access the features of the Flipkart clone.
* Browse products, add items to the cart, and proceed to checkout.
* View your order history and manage your account details.
