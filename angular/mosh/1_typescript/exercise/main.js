"use strict";
exports.__esModule = true;
var Like_1 = require("./Like");
function print(like) {
    console.log("Likes count: " + like.lCount);
    console.log("Has liked? " + like.liked);
}
function likeIt(like, hasLiked) {
    console.log();
    console.log("Before:::::");
    print(like);
    console.log("After:::::");
    like.liked = hasLiked;
    print(like);
    console.log();
}
var like = new Like_1.Like();
print(like);
like = new Like_1.Like(1);
print(like);
like = new Like_1.Like(1, false);
likeIt(like, true); // should increase by one 
likeIt(like, true); // should have no effect
likeIt(like, false); // should reduce by one 
