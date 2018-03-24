interface Point {
    x: number;
    y: number;
}


let drawPoint = (point: Point) => {
    console.log("I'm drawing ", point.x, point.y);
}

drawPoint({
    x: 5,
    y: 7
});