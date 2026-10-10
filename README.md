# SIT313 Task P4 – Login and Registration Website

## Introduction

This project is a website developed using React. In this task, I added login and registration functionality using Firebase. Users can create an account, log in with their email and password, and their details are saved in the Firestore database.

## Technologies Used

- React
- JavaScript
- Firebase Authentication
- Cloud Firestore
- CSS
- Node.js and Express for the newsletter feature

## Features

### 1. User Registration
Users can register by entering their first name, last name, email, password, and confirm password. The website checks that the details are valid and that both passwords match. After successful registration, the user's information is saved in Firestore.

### 2. User Login
Registered users can log in using their email and password. If the login details are incorrect, an error message is displayed. After successful login, the user is redirected to the home page.

### 3. Home Page
The website includes the existing home page and its components, such as the navigation bar, articles, tutorials, and footer.

### 4. Newsletter
The project also includes a newsletter feature. It uses a backend server and SendGrid to send a welcome email to subscribers.

## Firebase Setup

I connected the website to my Firebase project. Firebase Authentication is used for registering and logging in users, while Cloud Firestore stores their basic profile information.

The Firebase configuration is stored in a local `.env` file.

## How to Run the Project

First, install the project dependencies and start the website using the instructions provided in the project setup.

The newsletter feature requires the backend server to be running separately and needs valid SendGrid configuration.

## Testing

I tested the registration and login features. I also checked that the registered user's details were saved in Firestore. Incorrect login details were tested to check that an error message appeared.

## Conclusion

This task helped me understand how to connect a React website with Firebase Authentication and Firestore. I also learned how to handle form validation, display error messages, and manage user registration and login.
