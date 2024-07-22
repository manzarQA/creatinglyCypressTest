# Project Title

Brief description of your project.

## Getting Started

These instructions will help you set up and run the Cypress tests on your local machine.

### Prerequisites

Ensure you have the following software installed:

- [Node.js](https://nodejs.org/) (version 12 or later)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)

### Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    ```

2. Navigate to the project directory:

    ```bash
    cd your-repo-name
    ```

3. Install the project dependencies:

    ```bash
    npm install
    ```

### Running the Cypress Tests

1. Open the Cypress Test Runner:

    ```bash
    npx cypress open
    ```

2. In the Cypress Test Runner, click on `canvas.cy.js` to run the test.

Alternatively, you can run the tests in headless mode (without the GUI):

    ```bash
    npx cypress run --spec "cypress/e2e/canvas.cy.js"
    ```

### Project Structure

Briefly describe the project structure if necessary. For example:

```cypressTest
creatinglyCypressTest/
├── cypress/
│   ├── e2e/
│   │   └── canvas.cy.js
│   ├── fixtures/
│   ├── plugins/
│   └── support/
├── node_modules/
├── .gitignore
├── cypress.config.js
├── package-lock.json
├── package.json
└── README.md
