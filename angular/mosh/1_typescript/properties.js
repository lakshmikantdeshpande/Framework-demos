var Point = /** @class */ (function () {
    function Point(_x, y) {
        this._x = _x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log("I'm drawing something", this._x, this.y);
    };
    Object.defineProperty(Point.prototype, "x", {
        // getter
        get: function () {
            return this._x;
        },
        // getter
        set: function (value) {
            if (value < 0) {
                throw new Error('Value cannot be less than zero');
            }
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
var point = new Point(1, 3);
var x = point.x;
point.x = 19;
point.draw();
