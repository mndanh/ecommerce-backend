# Ecommerce Backend

## Table of Contents

[Description](#description)

[Installation](#installation)

[Usage](#usage)

[License](#license)

[Contributing](#contributing)

[Tests](#tests)

[Questions](#questions)

## Description

The purpose of of this project was to create a backend database that can update/add/change products for an online retailer's website. Using postrgres to connect to the database we can test to make sure it works in postman using GET, POST, PUT, and DELETE routes.

## Installation

To install my project, a user will have to make sure they're running express, postgres and sequelize. They should also create a dotenv file for user security. To run all these they will have to install node package manager.

## Usage

To use my application, you're going to have to open a terminal with all dependencies installed. Start by opening a terminal in the db folder to build the database. You do this by entering into the terminal psql -U postgres followed by \i schema.sql. That will get the database going and the next step is to seed the database. You do this by opening a terminal in the server.js file and typing in node seeds/index.js. After that run nodemon server.js to get the app live. It will then be usable and can be tested in postman. [ecommerce-backend.mp4](https://drive.google.com/file/d/1G04T668-vgT0QXxzLuvxR7lr-BzHG3jy/view?usp=sharing)

## License

MIT License

## Contributing

If you would like to make an addition to this application, contact me at my information below.

## Tests

Tests can be run through Postman.

## Questions

[Click here to view my project on GitHub:](https://github.com/mndanh/ecommerce-backend)

[Contact me with any questions or input you may have:](mndanh@gmail.com)
