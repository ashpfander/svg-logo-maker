// Grabs inquirer and file system packages
const inquirer = require('inquirer');
const fs = require('fs');

// Links to shapes.js file to grab from
const {Circle, Triangle, Square} = require('./lib/shapes.js');

// Creates questions for generating a customized logo
const questions = [
    {
        type: 'input',
        message: 'Using only 3 characters, what would you like your logo to say?',
        name: 'text',
    },
    {
        type: 'input',
        message: 'What color would you like your text to be?',
        name: 'textColor',
    },
    {
        type: 'list',
        message: 'What shape would you like your logo to be?',
        name: 'shape',
        choices: ['Circle', 'Triangle', 'Square'],
    },
    {
        type: 'input',
        message: 'What color would you like your shape to be?',
        name: 'shapeColor',
    },
];

// Function for creating a new file for the logo.svg
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Generated logo.svg!'));
}

// Function for initializing the questions and creating the file from the user input
function init() {
    // Uses inquirer package to prompt questions from questions array
    inquirer.prompt(questions)
    // Then takes the answers and creates the logo.svg file
    .then((answers) => {
        const logoGenerator = shapes(answers);
        writeToFile('logo.svg', logoGenerator)
    });
}

// Function to start the process
init();