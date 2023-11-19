### Question Paper Generator

A simple Question Paper Generator application built with Node.js and Express.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Example Endpoint](#example-endpoint)
- [Scripts](#scripts)
- [Testing](#testing)
- [Dependencies](#dependencies)
- [License](#license)

## Description

The Question Paper Generator is a web application designed to help users generate question papers based on specified criteria such as total marks and difficulty percentages (Easy, Medium, Hard). It utilizes Node.js for the server and Express for handling HTTP requests. The application provides endpoints for finding questions with a given total mark and asserting difficulty percentages.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sudouserx/question-paper-generator.git
   ```

2. Navigate to the project directory:

   ```bash
   cd question-paper-generator
   ```

3. Install dependencies:

   ```bash
   yarn install
   ```

## Usage

1. Start the development server:

   ```bash
   yarn start
   ```

   The server will start using nodemon, automatically restarting on file changes.

2. Access the application at [http://localhost:3000](http://localhost:3000).

3. Use the provided API endpoints to generate question papers based on your criteria.

### Example Endpoint

```http
GET http://localhost:3000/api/questions?totalMark=20&easy=20&medium=60&hard=20
```

## Scripts

- **start:** Start the development server using `nodemon`.
- **start:prod:** Start the production server using `node`.
- **test:** Run tests using Jest.

## Testing

The application uses Jest for testing. You can run the tests with the following command:

```bash
yarn jest
```

## Dependencies

- **express:** Fast, unopinionated, minimalist web framework for Node.js.
- **jest:** Delightful JavaScript Testing Framework.
- **nodemon:** Monitor for any changes in your Node.js application and automatically restart the server.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.