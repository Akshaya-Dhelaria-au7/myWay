# My Way Assignment


# Installing dependencies

To install the dependencies run

```bash
git clone <url>
npm install
```

# Running the Application
To run the application:

```bash
npm start
```

This application is also deployed on Heroku and the link is 

[My Ways](http://quiet-wave-00869.herokuapp.com)

# Tools and technologies used:

## Backend
Express(Version: 4.17.1): Express is a NodeJS web application framework which provides a robust set of features for web and mobile applications.

JsonWebTokens: It is used to securely transmit information between the parties as an JSON object . In our project, I have used to authorize the user.

Bcrypt: It is used to hash the password. It makes passwords more secure against brute force attacks.

Express-Validator: Express Validator is an Express middleware library that you can incorporate in apps for server-side data validation.

Nodemailer: I have also used Nodemailer to send OTP so that Email Verification can be done for the user.

MongoDB: This document data model is a powerful way to store and retrieve data that allows developers to move fast. It is also useful to build scalable applications.
 
Dotenv: This package is used to keep all the confidential data like Password of the database, Email and Password of the email which is used to send the OTP  etc.


## Frontend:

React(Version : 17.0.1): It helps to create large applications where data can be changed without reloading the page. It is fast, scalable and simple.

Redux: It is much easier for state management in our application and wherever we need the state, we have to connect with the component.

React-Redux:It is the package which is used to connect our redux store with react. 

Redux-Thunk:It is the middleware which is used to call the API as it returns the function instead of action.
 
Axios: Axios is a lightweight, promise-based HTTP client. It is the library that helps us to make HTTP requests to external resources.
 
React-Router-Dom: This package is used to navigate between different components , changing the browser URL.

[Frontend Deployed on Herokuapp](http://quiet-wave-00869.herokuapp.com)
