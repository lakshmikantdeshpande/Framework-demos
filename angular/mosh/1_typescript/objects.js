var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log("Draw here x: ", this.x, " y is ", this.y);
    };
    Point.prototype.getDistance = function () {
        console.log("Get the distance here");
    };
    return Point;
}());
var point = new Point();
point.x = 4;
point.y = 6;
point.draw();
