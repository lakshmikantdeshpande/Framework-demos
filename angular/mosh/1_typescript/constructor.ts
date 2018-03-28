class Point {
    x: number;
    y: number;

    // ? for optional parameters
    constructor(x: number, y?: number) {
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log("Draw here x: ", this.x);
    }

    getDistance() {
        console.log("Get the distance here");
    }
}

let point = new Point(1, 2);
point.draw();

let point2 = new Point(87);
point2.draw();

point.getDistance();
