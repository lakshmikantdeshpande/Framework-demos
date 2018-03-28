class Point {
    private x: number;
    private y: number;

    draw() {
        console.log("Draw here");
    }

    getDistance() {
        console.log("Get the distance here");
    }
}

let point = new Point();
point.draw();
