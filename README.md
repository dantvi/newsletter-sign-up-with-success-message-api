# Newsletter sign-up form with success message server

This is the server for the Newsletter sign-up form with success message challenge on Frontend Mentor. 

## Table of contents

- [Newsletter sign-up form with success message server](#newsletter-sign-up-form-with-success-message-server)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

The server should be able to: 

- Handle User Sign-ups: Accept and process POST requests from the front end to register users who want to sign up for the newsletter. This should include:
  - Validating email addresses to ensure they follow a proper format.
  - Checking for duplicate email entries in the database to prevent multiple subscriptions by the same user.
- Store Subscriber Information: Connect to a PostgreSQL database where the server stores subscriber information securely, including:
  - Subscriber email and a timestamp of registration.
- Send Success or Error Responses: Provide feedback to the front end, sending success messages for successful sign-ups and error messages when something goes wrong (e.g., invalid email, already subscribed, database issues).

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [GitHub](https://github.com/dantvi/newsletter-sign-up-with-success-message)
- Live Site URL: [GitHub Pages](https://dantvi.github.io/newsletter-sign-up-with-success-message/)
- Server: [GitHub](https://github.com/dantvi/newsletter-sign-up-with-success-message-api)

## My process

### Built with

- Node.js
- Express
- PostgreSQL
- Knex
- CORS
- dotenv
- nodemon

### Useful resources

- [Node.js Documentation](https://nodejs.org/en/docs/) - Comprehensive information on the Node.js API and tools.
- [Express.js Guide](https://expressjs.com/en/starter/guide.html) - Official guide for Express.js.
- [PostgreSQL Documentation](https://www.postgresql.org/docs/) - Detailed documentation on installation, usage, and advanced features of PostgreSQL.
- [Knex.js Documentation](https://knexjs.org/) - Documentation for Knex.js, a SQL query builder for Node.js.
- [CORS in Express.js](https://expressjs.com/en/resources/middleware/cors.html) - Official documentation on CORS middleware in Express.
- [dotenv GitHub Repository](https://github.com/motdotla/dotenv) - Guide on managing environment variables with dotenv.

## Author

- Portfolio - [Daniel Tving](https://dantvi.github.io/personal-portfolio-webpage/)
- Frontend Mentor - [@dantvi](https://www.frontendmentor.io/profile/dantvi)
- GitHub - [@dantvi](https://github.com/dantvi)
