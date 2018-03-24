var Point = /** @class */ (function () {
    // ? for optional parameters
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log("Draw here x: ", this.x);
    };
    Point.prototype.getDistance = function () {
        console.log("Get the distance here");
    };
    return Point;
}());
var point = new Point(1, 2);
point.draw();
var point2 = new Point(87);
point2.draw();
point.getDistance();
