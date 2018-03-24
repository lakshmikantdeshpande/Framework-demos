class Point {
    constructor(private _x?: number, private y?: number) {
    }

    draw() {
        console.log("I'm drawing something", this._x, this.y);
    }

    // getter
    get x() {
        return this._x;
    }

    // getter
    set x(value) {
        if (value < 0) {
            throw new Error('Value cannot be less than zero');
        }
        this._x = value;
    }
}

let point = new Point(1, 3);
let x = point.x;
point.x = 19;
point.draw();