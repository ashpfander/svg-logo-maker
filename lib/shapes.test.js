// Grabs the shapes.js classes to test
const {Circle, Triangle, Square} = require('./shapes.js');

// Test the Circle class
describe('Circle', () => {
    it('should create a circle with a blue fill', () => {
        const shape = new Circle('blue');
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="100" fill="blue"/>');
    })
    it('should create a circle with a custom hex code fill', () => {
        const shape = new Circle('#808000');
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="100" fill="#808000"/>');
    })
})

// Test the Triangle class
describe('Triangle', () => {
    it('should create a triangle with a yellow fill', () => {
        const shape = new Triangle("yellow");
        expect(shape.render()).toEqual('<polygon points="150, 0 275, 200 25, 200" fill="yellow"/>');
    })
    it('should create a triangle with a custom hex code fill', () => {
        const shape = new Triangle('#808000');
        expect(shape.render()).toEqual('<polygon points="150, 0 275, 200 25, 200" fill="#808000"/>');
    })
})

// Test the Square class
describe('Square', () => {
    it('should create a square with a red fill', () => {
        const shape = new Square("red");
        expect(shape.render()).toEqual('<rect x="50" y="0" width="200" height="200" fill="red"/>');
    })
    it('should create a triangle with a custom hex code fill', () => {
        const shape = new Square('#808000');
        expect(shape.render()).toEqual('<rect x="50" y="0" width="200" height="200" fill="#808000"/>');
    })
})