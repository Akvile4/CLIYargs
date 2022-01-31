const movieArr = [];

class Movie {
    constructor (title, actor = "not defined") {
        this.title = title;
        this.actor = actor;
    }
    add() {
        movieArr.push(this);
    }
};

module.exports = { Movie, movieArr };