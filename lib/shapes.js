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
      return `<circle cx="25" cy="75" r="200" fill="${shapeColor}"/>`
    }
}

class Triangle extends Shape {
    constructor(shapeColor) {
      super(shapeColor);
    }
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}"/>`
    }
}

class Square extends Shape {
    constructor(shapeColor) {
      super(shapeColor);
    }
    render() {
      return `<rect x="10" y="10" width="200" height="200" fill="${shapeColor}"/>`
    }
}

module.exports = {Circle, Triangle, Square};