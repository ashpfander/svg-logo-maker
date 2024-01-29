// Grabs inquirer and file system packages
const inquirer = require('inquirer');
const fs = require('fs');

// Links to shapes.js file to grab from
const shapes = require('./lib/shapes.js');

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
        name: 'text color',
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
        name: 'shape color',
    },
];