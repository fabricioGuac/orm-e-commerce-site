# Orm-e-commerce-site

## Description 

This project involves building the back end for an e-commerce. The primary objective is to take a working Express.js API and configure it to interact with a PostgreSQL database using Sequelize, an ORM (Object-Relational Mapping) tool. The implementation aims to create a robust and scalable backend that allows a company to compete effectively with other e-commerce platforms.

## Instalation

In order to instalate this project you would need to ensure you have postgressql in your machine, clone the code from the repository and install the necessary dependencies by running npm install.

## Usage

To use this project, create a .env file in the root directory with your PostgreSQL connection URI in the format POSTGRES_URI=postgres://user:password@localhost:port/ecommerce_db to securely store your database credentials. Open your PostgreSQL command line tool (psql) and run the db/schema.sql file to create the necessary database, then seed the database with initial data using npm run seed. Start the Express.js server with npm start to initialize the server and sync Sequelize models to your PostgreSQL database. Use tools like Insomnia Core or Postman to interact with the API routes, testing the GET routes to retrieve data in JSON format and the POST, PUT, DELETE routes to create, update, and delete data in the database.

## Walkthrough video

[Click here to go to a walkthrough video](https://drive.google.com/file/d/1U4vfXULyqnToAuesidZFPH3-Im4-agKF/view)


## Credits

N/A

## Contributing

We welcome contributions to this project! To contribute, please follow these steps: 1. Fork the repository. 2. Create a new branch for your feature or bug fix. 3. Make your changes. 4. Test your changes locally. 5. Commit your changes with a clear commit message. 6. Push your changes to your fork. 7. Submit a pull request to the main repository's branch. Thank you for contributing to this project!


## License

MIT License

Copyright (c) 2024 fabricioGuac

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Questions

If you have any questions or need help with the project, feel free to contact me through the following channels: - Connect with me on GitHub at [fabricioGuac](https://github.com/fabricioGuac)  - Drop me an email at [guacutofabricio@gmail.com](https://github.com/guacutofabricio@gmail.com)   Don't hesitate to reach out if you need any clarifications or want to share feedback. I'm here to assist you!