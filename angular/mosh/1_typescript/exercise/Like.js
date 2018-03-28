"use strict";
exports.__esModule = true;
var Like = /** @class */ (function () {
    function Like(_lCount, _liked) {
        this._lCount = _lCount;
        this._liked = _liked;
        if (_liked === undefined) {
            this._liked = false;
        }
        if (_lCount === undefined) {
            this._lCount = 0;
        }
    }
    Object.defineProperty(Like.prototype, "lCount", {
        get: function () {
            return this._lCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Like.prototype, "liked", {
        get: function () {
            return this._liked;
        },
        set: function (value) {
            if (this._liked != value) {
                this._lCount += (value === true) ? 1 : -1;
                this._liked = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Like;
}());
exports.Like = Like;
