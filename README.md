# REACTFLIX - Recipe Finder Web Application


## Introduction
This is a web application that allows users to find and order recipes based on their preferences, calorie requirements, and dietary choices. The application utilizes Firebase for Google login authentication and integrates with the EDAMAM Try API to fetch recipe data. The user interface is designed to be responsive and user-friendly.



## Deployed link



## Features
- Firebase Google Login integration for user authentication
- Bottom navigation with options: Recipe, Calorie, Diet
- Recipe screen with search functionality and a list of recipes in card format
- Each recipe card displays the recipe image, title, protein and fat count (represented with circular bars), and an "Order Now" button
- On clicking the "Order Now" button, an in-app notification is sent with the message "Order Placed"
- Calorie screen that displays recipes based on the specified calorie count
- Diet screen where users can select dietary options to view corresponding recipes
- Logout functionality to sign out the user from Firebase authentication



## Technologies Used
- HTML
- CSS
- JavaScript
- React JS
- Chakra UI
- React-Icons
- React-Router-dom
- Firebase Authontication


## Setup Instructions

1. Clone the repository: `git clone https://github.com/Manojkumar7978/taskthree.git`
2. Navigate to the project directory: `cd taskone`
3. Install dependencies: `npm install`
5. Start the development server: `npm start`
6. Open the web application in your browser at `http://localhost:3000`



## use

- Google Login: Users can easily log in to the application using their Google accounts via Firebase authentication.


- Recipe Screen:

- Search Functionality: Users can search for recipes using the search bar.
- List of Recipes: Recipes, initially Indian cuisine by default, are displayed in card format, showcasing the recipe's image, title, protein and fat count (represented through circular bars), and an "Order Now" button.
- Order Placement Notification: Clicking the "Order Now" button triggers an in-app notification confirming the order placement.

- Calorie Screen:

- Recipe Selection Based on Calories: Users can view recipes based on the desired calorie count.

- Diet Screen:
- User can select diet option and get recepe based on that.

-Logout Functionality: Users can conveniently log out of the application.





