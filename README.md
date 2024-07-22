# Project Name

## Introduction

Brief description of your project.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed [Node.js](https://nodejs.org/en/) (v12 or higher).
- You have a package manager like [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/).

## Installation

To clone and set up the project, follow these steps:

1. **Clone the repository**

   ```bash
   git clone {LINK}

2. Install dependencies

If you are using npm:
npm install

Or if you are using yarn:
yarn install

3. Running Cypress Tests
To run the Cypress tests, follow these steps:

Open Cypress Test Runner

If you want to run the tests in the Cypress Test Runner UI:
npx cypress open

Then, in the Cypress Test Runner, click on the canvas.cy.js file to run the tests.
Run Cypress Tests in Headless Mode

If you prefer to run the tests in headless mode (in the terminal):
npx cypress run --spec "cypress/e2e/canvas.cy.js"
