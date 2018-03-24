import { Like } from './Like';

function print(like: Like) {
    console.log(`Likes count: ${like.lCount}`);
    console.log(`Has liked? ${like.liked}`);
}

function likeIt(like: Like, hasLiked: boolean) {
    console.log();
    console.log("Before:::::")
    print(like);
    console.log("After:::::")
    like.liked = hasLiked;
    print(like);
    console.log();
}


let like = new Like();
print(like);

like = new Like(1);
print(like);

like = new Like(1, false);
likeIt(like, true); // should increase by one 

likeIt(like, true); // should have no effect

likeIt(like, false); // should reduce by one 