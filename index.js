// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// Array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the description?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the installation instrucitons?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What is the usage information?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Choose a license for your project',
        choices: ['Apache License 2.0','GNU General Public License v3.0','MIT License'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'What are the test instructions?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully wrote README.md file')
    );
}

// Function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            writeToFile("README-TEST.md",generateMarkdown(data));
        })
}

// Function call to initialize app
init();
