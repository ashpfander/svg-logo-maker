# Challenge 10: Object-Oriented Programming SVG Logo Maker
![License badge](https://img.shields.io/badge/license-MIT_License-blue)

## Description

For this challenge, we had to write code from scratch so that it can create a simple SVG format logo. We were required to use the inquirer package and jest to run tests. The logo should have at least 3 shape options (Circle, Triangle, and Square) and only allow up to 3 letters/characters. Then we had to create tests for the different shapes to make sure they worked correctly. Here were the User Story and Acceptance Criteria.

## User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Video Tutorial

[SVG Logo Maker Walkthrough Video](https://drive.google.com/file/d/1elyxq2npq-p-Q6VWurQBXRAIOTuB_vRy/view)

## Example Logos

![Circle logo](./examples/circle.svg)
![Square logo](./examples/square.svg)
![Triangle logo](./examples/triangle.svg)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

Once this repo has been cloned to your local system and opened in VS Code, you will need to install inquirer and jest. In your terminal, run `npm i` and it will install the necessary packages.

## Usage

To quickly and easily create a simple logo in SVG format.

## Contributing

N/A

## Tests

To run some tests, open the terminal and run `npm run test`. It will run the tests that are in the shapes.test.js file. To run additional tests, just add more within that file.

## License
MIT License

---

## Questions

Any questions you may have, please feel free to reach out to me using either contact.<br>
GitHub Profile: https://github.com/ashpfander<br>
Email: ashmpfander@gmail.com