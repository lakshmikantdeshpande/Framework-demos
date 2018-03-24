class Point {
    constructor(private x?: number, private y?: number) {
    }

    draw() {
        console.log("I'm drawing something", this.x, this.y);
    }
}

let point = new Point(1, 3);
point.draw();