// Links to shapes.js file to grab the different shape classes
const {Circle, Triangle, Square} = require('./shapes.js');

class Characters {
    constructor(text, textColor) {
        this.text = text;
        this.textColor = textColor;
    }
}

class generateSVG extends Characters {
    constructor(text, textColor) {
        super(text, textColor)
    }
    render() {
    return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

    </svg>`
    }
}

module.exports = generateSVG;