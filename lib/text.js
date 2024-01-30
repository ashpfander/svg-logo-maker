// Parent class for Text class
class Characters {
    constructor(text, textColor) {
        this.text = text;
        this.textColor = textColor;
    }
}

class Text extends Characters {
    constructor(text, textColor) {
        super(text, textColor)
    }
    render() {
    return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`
    }
}

module.exports = Text;