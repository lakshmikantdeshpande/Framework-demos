// old way
var log = function (message) {
    console.log(message);
};
// new way (like lambda expressions in java)
var logArrow = function (message) {
    console.log(message);
};
log('hello');
logArrow('bye');
