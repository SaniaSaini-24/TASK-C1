Project Overview

This project is the React version of my DEV@Deakin website. The website
was migrated from my previous HTML, CSS and JavaScript task into a React
and Vite project.

The main purpose of this task was to learn how React components can be
used to organise a frontend application and how reusable components can
make the code easier to maintain.

Technologies Used

React

Vite

JavaScript / JSX

Tailwind CSS

HTML

CSS

GitHub

Main Features

The website contains:

Navigation Bar

Hero Section

About Section

Featured Articles

Projects

Featured Tutorials

Gallery

Contact

Newsletter

Footer

React Components

The website is divided into separate React components:

navbar.jsx

hero.jsx

about.jsx

featuredArticles.jsx

projects.jsx

featuredTutorials.jsx

gallery.jsx

contact.jsx

newsLetter.jsx

footer.jsx

articleCard.jsx

tutorialCard.jsx

App.jsx works as the main parent component and combines the different
sections.

Featured Articles

The Featured Articles section stores article information in an array of
objects. Each article contains a title, description and image.

The map() function is used to display the articles dynamically using
the reusable ArticleCard component.

The three featured articles are:

Getting Started with React

Understanding Artificial Intelligence

Introduction to Cloud Computing

Projects

A separate Projects section was created for my personal projects:

Universal Text Converter

Enhancing Transaction Management with Cloud Native Architecture and
Machine Learning

Deepfake Detection System

Each project contains a title, description and image.

Featured Tutorials

The Featured Tutorials section uses reusable tutorial cards. Each
tutorial contains a title, description, image and button.

Navigation

Navigation links are connected to page sections using section IDs.
Smooth scrolling was also added.

Examples:

Home → About section

Articles → Featured Articles

Tutorials → Featured Tutorials

Contact Us → Contact section

Footer

The footer was designed based on the DEV@Deakin example.

It contains:

Explore

Support

Stay Connected

Social media buttons

DEV@Deakin information

Privacy Policy

Terms

Code of Conduct

Newsletter

The newsletter section was migrated into the React frontend from the
previous task.

Users can enter their email address and submit the form. The existing
backend functionality is kept separately because P3 focuses on the
frontend migration to React.