// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
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
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'What are the test instructions?',
        name: 'tests',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully wrote README.md file')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            writeToFile("README.md",generateMarkdown(data));
        })
}

// Function call to initialize app
init();
