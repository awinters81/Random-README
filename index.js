// TODO: Include packages needed for this application
// So I know that I need to use the Inquire package, and I think I'll have to use the generateMarkdown.js since it has what I need for
//licenses.

const inquirer = require('inquirer');
const generateMarkdown = require ('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// What would be typical questions for a README? The project name, a description, whose account it belongs to, email, maybe dependencies since
// I know that we have a package.json file.
const questions = [
    
    {
        type: 'input',
        name: 'Project Name',
        message: 'Name of your project?'
      },

      {
        type: 'input',
        name: 'Description',
        message: 'Please describe your project.'
      },

      {
        type: 'input',
        name: 'GitHub Account',
        message: "What is your GitHub user name?"
      },

      {
        type: 'input',
        name: 'Email',
        message: 'What is your email address?'
      },

      {
        type: 'input',
        name: 'Dependencies',
        message: 'What command should be run to install dependencies?',
      },

      {
        type: 'input',
        name: 'License',
        message: 'What kind of license should your project have?',
      }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();