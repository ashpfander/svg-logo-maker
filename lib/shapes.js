// Parent class for all shapes
class Shape {
    constructor(shapeColor) {
        this.shapeColor = shapeColor;
    }
}

// Child classes for each shape using properties from parent Shape class
class Circle extends Shape {
    constructor(shapeColor) {
      super(shapeColor);
    }
    render() {
      return `<circle cx="150" cy="100" r="100" fill="${this.shapeColor}"/>`
    }
}

class Triangle extends Shape {
    constructor(shapeColor) {
      super(shapeColor);
    }
    render() {
      return `<polygon points="150, 0 275, 200 25, 200" fill="${this.shapeColor}"/>`
    }
}

class Square extends Shape {
    constructor(shapeColor) {
      super(shapeColor);
    }
    render() {
      return `<rect x="50" y="0" width="200" height="200" fill="${this.shapeColor}"/>`
    }
}

module.exports = {Circle, Triangle, Square};