class Point {
    x: number;
    y: number;

    draw() {
        console.log("Draw here x: ", this.x, " y is ", this.y);
    }

    getDistance() {
        console.log("Get the distance here");
    }
}

let point = new Point();
point.x = 4;
point.y = 6;
point.draw();