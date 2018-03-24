var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log("Draw here");
    };
    Point.prototype.getDistance = function () {
        console.log("Get the distance here");
    };
    return Point;
}());
var point = new Point();
point.draw();
