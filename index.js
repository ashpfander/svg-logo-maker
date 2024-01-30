// Grabs inquirer and file system packages
const inquirer = require('inquirer');
const fs = require('fs');

// Links to svg.js file
const text = require('./lib/text.js');
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
        // Needs an empty variable to accept the user response
        let svgShape = '';

        // Uses the Circle class if Circle is selected
        if (answers.shape === 'Circle') {
            svgShape = new Circle();
        }
        // Uses the Triangle class if Triangle is selected
        if (answers.shape === 'Triangle') {
            svgShape = new Triangle();
        }
        // Uses the Square class if Square is selected
        if (answers.shape === 'Square') {
            svgShape = new Square();
        }

        // const logoGenerator = svg(answers);
        // writeToFile('logo.svg', logoGenerator)
    });
}

// Function to start the process
init();