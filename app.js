const URL='https://soniajv-ionic.github.io/movies-250.json';

function processMovie(data) {
    const movies = data.movies;
    movies.array.forEach(m => {
        console.log(m.Title);
    });
    
    for (movie of movies) {
        console.log(`Director: ${movie.Director}`);
    }
}

doGetRequest(URL, processMovie);