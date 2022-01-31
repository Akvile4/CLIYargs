const yargs = require("yargs");

const { Movie, movieArr} = require("./utils");

// console.log(process.argv);
// console.log(yargs.argv);

const app = (args) => {
    if (args.add) {
        const movie = new Movie(args.movie, args.actor);
        movie.add();
        console.log(movieArr);
    } else if (args.addMany) {
        const movie1 = new Movie(args.movie, args.actor);
        const movie2 = new Movie(args.movie, args.actor);
        console.log("add many command");
    } else {
        console.log("Incorrect command")
    }
};

app(yargs.argv);