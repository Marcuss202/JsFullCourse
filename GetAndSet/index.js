//Get and Set
//makes people not be able to throw unwanted or fake numbers.

class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }

    set width (properWidth) {
        if (properWidth > 0) {
            return this._width = properWidth
        }
        else {
            return console.error("please put valid numbers in width")
        }
    }

    get width() {
        return `${this._width.toFixed(1)}cm`
    }

    set height(properHeight) {
        if(properHeight > 0) {
            return this._height = properHeight
        }
        else{
            return console.error("please put valid numbers in height")
        }
    }

    get height() {
        return `${this._height.toFixed(1)}cm`
    }

    get area() {
        return `${(this._height * this._width).toFixed(1)}cm^2`
    }
}

const Rectangle1 = new Rectangle(16, 1);

console.log(Rectangle1.width);
console.log(Rectangle1.height);
console.log(Rectangle1.area)