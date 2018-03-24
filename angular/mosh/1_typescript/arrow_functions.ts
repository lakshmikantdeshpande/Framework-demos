// old way
let log = function(message) {
    console.log(message);
}

// new way (like lambda expressions in java)
let logArrow = (message) => {
    console.log(message);
}

log('hello');
logArrow('bye');
